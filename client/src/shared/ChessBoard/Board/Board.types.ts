import { ChessPiece, Coordinates } from "../ChessBoard.types";

export type ChessPiecesMatrix = (ChessPiece | null)[][];

export type Props = {
  piecesMatrix: ChessPiecesMatrix;
  reversed?: boolean;
  onSquareHover: (coordinates?: Coordinates) => void;
};
