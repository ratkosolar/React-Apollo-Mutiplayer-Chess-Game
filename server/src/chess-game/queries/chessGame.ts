import { IChessGame } from '../chess-game.types';
import { ChessGame } from '../chess-game.model';
import { Schema } from 'mongoose';

type Args = {
  id: Schema.Types.ObjectId;
};

type ChessGameQuery = (args: Args) => Promise<IChessGame | null>;

export const chessGame: ChessGameQuery = async ({ id }) => {
  return ChessGame.findById(id);
};
