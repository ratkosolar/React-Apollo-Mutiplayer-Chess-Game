import { ReactNode } from "react";
import { Coordinates } from "../ChessBoard.types";

export type ChessPiecesMatrix = ReactNode[][];

export type Props = {
  piecesMatrix: ChessPiecesMatrix;
  reversed?: boolean;
  onSquareHover: (coordinates?: Coordinates) => void;
};
