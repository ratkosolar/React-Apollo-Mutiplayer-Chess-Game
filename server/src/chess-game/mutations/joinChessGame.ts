import { Schema } from 'mongoose';
import { ChessGame } from '../chess-game.model';
import { IChessGame } from '../chess-game.types';

type Args = {
  id: Schema.Types.ObjectId;
};

type JoinChessGameMutation = (userId: Schema.Types.ObjectId, args: Args) => Promise<IChessGame>;

export const joinChessGame: JoinChessGameMutation = async (userId, { id }) => {
  const game = await ChessGame.findById(id);
  if (!game) {
    throw new Error('Game not found');
  }

  if (
    game.playerTwoID?.toString() === userId.toString() ||
    game.playerOneID.toString() === userId.toString()
  ) {
    throw new Error('You already joined this game');
  }
  if (!!game.playerTwoID) {
    throw new Error('Game is already full');
  }

  game.playerTwoID = userId;
  return game.save();
};
