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

export enum ChessColor {
  LIGHT = "light",
  DARK = "dark",
}

export type ChessPiece = {
  type: ChessPieceType;
  color: ChessColor;
};

export type ChessPiecesMatrix = (ChessPiece | null)[][];

export type Props = {
  chessPiecesMatrix: ChessPiecesMatrix;
  onMove?: (
    piece: ChessPiece,
    prevCoordinates: Coordinates,
    nextCoordinates: Coordinates
  ) => void;
  validatePieceDisabled?: (
    piece: ChessPiece,
    coordinates: Coordinates
  ) => boolean;
  calculateLegalMoves?: (
    piece: ChessPiece,
    coordinates: Coordinates
  ) => Coordinates[];
  reversed?: boolean;
  xAxisLabels?: AxisLabels;
  yAxisLabels?: AxisLabels;
};
