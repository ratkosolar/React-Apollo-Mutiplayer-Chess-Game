import { Model, Schema } from 'mongoose';

export enum ChessColor {
  WHITE = 'w',
  BLACK = 'b',
}

export enum ChessGameOverReason {
  CHECKMATE = 'checkmate',
  DRAW = 'draw',
  STALEMATE = 'stalemate',
  THREEFOLD_REPETITION = 'threefold_repetition',
  INSUFFICIENT_MATERIAL = 'insufficient_material',
}

export interface IChessGame {
  playerOneID: Schema.Types.ObjectId;
  playerTwoID?: Schema.Types.ObjectId;
  playerOneColor: ChessColor;
  playerTwoColor: ChessColor;
  startDate: Date;
  endDate?: Date;
  fen: string;
  pgn?: string;
  gameOverReason?: ChessGameOverReason;
  winnerID?: Schema.Types.ObjectId;
}

export type ChessGameModel = Model<IChessGame, {}, {}>;
