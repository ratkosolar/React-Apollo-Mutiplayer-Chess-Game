import { Schema } from 'mongoose';
import { ForbiddenError } from 'apollo-server-express';
import * as chessJs from 'chess.js';
import { ChessGame } from '../chess-game.model';
import { ChessGameOverReason, IChessGame } from '../chess-game.types';

type Args = {
  id: Schema.Types.ObjectId;
  move: string;
};

type MakeChessGameMoveMutation = (userId: Schema.Types.ObjectId, args: Args) => Promise<IChessGame>;

export const makeChessGameMove: MakeChessGameMoveMutation = async (userId, { id, move }) => {
  const game = await ChessGame.findById(id);

  // Validate game
  if (!game) {
    throw new Error('Game not found');
  }
  if (!game.playerTwoID) {
    throw new Error('Game not started yet');
  }
  if (!!game.endDate) {
    throw new Error('Game already completed');
  }
  if (![game.playerOneID.toString(), game.playerTwoID.toString()].includes(userId.toString())) {
    throw new ForbiddenError('Not allowed to make moves');
  }

  const chess = new chessJs.Chess(game.fen);
  chess.load_pgn(game.pgn);

  const currentTurnColor = chess.turn();
  const playerColor =
    game.playerOneID.toString() === userId.toString() ? game.playerOneColor : game.playerTwoColor;
  if (playerColor !== currentTurnColor) {
    throw new ForbiddenError('Not your turn');
  }

  if (chess.move(move) === null) {
    throw new ForbiddenError('Invalid move');
  }

  if (chess.game_over()) {
    game.endDate = new Date();

    if (chess.in_checkmate()) {
      const loserColor = chess.turn();
      game.winnerID = game.playerOneColor === loserColor ? game.playerTwoID : game.playerOneID;
      game.gameOverReason = ChessGameOverReason.CHECKMATE;
    } else if (chess.in_draw()) {
      game.gameOverReason = ChessGameOverReason.DRAW;
    } else if (chess.in_stalemate()) {
      game.gameOverReason = ChessGameOverReason.STALEMATE;
    } else if (chess.in_threefold_repetition()) {
      game.gameOverReason = ChessGameOverReason.THREEFOLD_REPETITION;
    } else if (chess.insufficient_material()) {
      game.gameOverReason = ChessGameOverReason.INSUFFICIENT_MATERIAL;
    }
  }

  game.fen = chess.fen();
  game.pgn = chess.pgn();

  return game.save();
};
