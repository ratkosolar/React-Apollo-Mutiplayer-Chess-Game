import { ChessPieceWithCoordinates } from "../Pieces/Pieces.types";
import { ChessPiece, Coordinates } from "../ChessBoard.types";

export type LegalMovesMap = Record<string, boolean>;

export type Props = {
  hoveredSquare?: Coordinates;
  draggingPiece?: ChessPieceWithCoordinates;
  reversed?: boolean;
  calculateLegalMoves?: (
    piece: ChessPiece,
    coordinates: Coordinates
  ) => Coordinates[];
};
