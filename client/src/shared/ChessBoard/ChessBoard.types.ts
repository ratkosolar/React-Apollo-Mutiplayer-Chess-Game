import { ChessPiecesMatrix } from "./Board/Board.types";
import { AxisLabels } from "./Legend/Legend.types";

export type Coordinates = {
  x: number;
  y: number;
};

export enum ChessPieceType {
  KING = "king",
  QUEEN = "queen",
  ROOK = "rook",
  KNIGHT = "knight",
  BISHOP = "bishop",
  PAWN = "pawn",
}

export type ChessPiece = {
  type: ChessPieceType;
  color: ChessColor;
};

export enum ChessColor {
  LIGHT = "light",
  DARK = "dark",
}

export type Props = {
  fen: string;
  reversed?: boolean;
  xAxisLabels?: AxisLabels;
  yAxisLabels?: AxisLabels;
};
