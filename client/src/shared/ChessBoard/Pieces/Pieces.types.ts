import {
  Props as ChessBoardProps,
  ChessPiece,
  Coordinates,
} from "../ChessBoard.types";

export type ChessPieceWithCoordinates = ChessPiece & Coordinates;

export type Props = {
  chessPiecesMatrix: ChessBoardProps["chessPiecesMatrix"];
  draggingPiece?: ChessPieceWithCoordinates;
  reversed?: boolean;
  onDragStart?: (piece: ChessPieceWithCoordinates) => void;
  onDragStop?: (piece: ChessPieceWithCoordinates) => void;
  validatePieceDisabled?: (
    piece: ChessPiece,
    coordinates: Coordinates
  ) => boolean;
};
