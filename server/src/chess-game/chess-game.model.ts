import { model, Schema } from 'mongoose';
import { ChessColor, ChessGameOverReason, IChessGame, ChessGameModel } from './chess-game.types';

const { ObjectId } = Schema.Types;

const ChessGameSchema = new Schema<IChessGame, ChessGameModel>({
  playerOneID: {
    type: ObjectId,
    required: true,
  },
  playerTwoID: ObjectId,
  playerOneColor: {
    type: String,
    enum: ChessColor,
    required: true,
  },
  playerTwoColor: {
    type: String,
    enum: ChessColor,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: Date,
  fen: {
    type: String,
    required: true,
  },
  pgn: String,
  gameOverReason: {
    type: String,
    enum: ChessGameOverReason,
  },
  winnerID: ObjectId,
});

export const ChessGame = model<IChessGame, ChessGameModel>('ChessGame', ChessGameSchema);
