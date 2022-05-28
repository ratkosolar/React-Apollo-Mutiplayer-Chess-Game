import { Schema } from 'mongoose';
import * as chessJs from 'chess.js';
import { ChessGame } from '../chess-game.model';
import { ChessColor, IChessGame } from '../chess-game.types';

type CreateChessGameMutation = (userId: Schema.Types.ObjectId) => Promise<IChessGame>;

const getRandomPlayerColors = (): { playerOneColor: ChessColor; playerTwoColor: ChessColor } => {
  return Math.random() > 0.5
    ? { playerOneColor: ChessColor.BLACK, playerTwoColor: ChessColor.WHITE }
    : { playerOneColor: ChessColor.WHITE, playerTwoColor: ChessColor.BLACK };
};

export const createChessGame: CreateChessGameMutation = async (userId) => {
  const games = await ChessGame.find({
    playerOneID: userId,
    playerTwoID: { $exists: false },
  });
  if (games.length >= 1) {
    throw new Error(`You can't have more than 1 open game.`);
  }
  const chess = new chessJs.Chess();
  const fen = chess.fen();
  const pgn = chess.pgn();
  const { playerOneColor, playerTwoColor } = getRandomPlayerColors();

  return ChessGame.create({
    playerOneID: userId,
    playerOneColor,
    playerTwoColor,
    startDate: new Date(),
    fen,
    pgn,
  });
};
