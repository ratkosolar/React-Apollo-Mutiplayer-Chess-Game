import React, { useState } from "react";
import { Story } from "@storybook/react";

import { ThemeWrapper } from "../Theme";
import { ChessBoard } from ".";
import { ChessColor, ChessPieceType } from "./ChessBoard.types";
import { action } from "@storybook/addon-actions";

export default {
  title: "Shared / ChessBoard",
};

const EMPTY_BOARD_MATRIX = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
];
const STARTING_BOARD_MATRIX = [
  [
    { type: ChessPieceType.ROOK, color: ChessColor.DARK },
    { type: ChessPieceType.KNIGHT, color: ChessColor.DARK },
    { type: ChessPieceType.BISHOP, color: ChessColor.DARK },
    { type: ChessPieceType.QUEEN, color: ChessColor.DARK },
    { type: ChessPieceType.KING, color: ChessColor.DARK },
    { type: ChessPieceType.BISHOP, color: ChessColor.DARK },
    { type: ChessPieceType.KNIGHT, color: ChessColor.DARK },
    { type: ChessPieceType.ROOK, color: ChessColor.DARK },
  ],
  [
    { type: ChessPieceType.PAWN, color: ChessColor.DARK },
    { type: ChessPieceType.PAWN, color: ChessColor.DARK },
    { type: ChessPieceType.PAWN, color: ChessColor.DARK },
    { type: ChessPieceType.PAWN, color: ChessColor.DARK },
    { type: ChessPieceType.PAWN, color: ChessColor.DARK },
    { type: ChessPieceType.PAWN, color: ChessColor.DARK },
    { type: ChessPieceType.PAWN, color: ChessColor.DARK },
    { type: ChessPieceType.PAWN, color: ChessColor.DARK },
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    { type: ChessPieceType.PAWN, color: ChessColor.LIGHT },
    { type: ChessPieceType.PAWN, color: ChessColor.LIGHT },
    { type: ChessPieceType.PAWN, color: ChessColor.LIGHT },
    { type: ChessPieceType.PAWN, color: ChessColor.LIGHT },
    { type: ChessPieceType.PAWN, color: ChessColor.LIGHT },
    { type: ChessPieceType.PAWN, color: ChessColor.LIGHT },
    { type: ChessPieceType.PAWN, color: ChessColor.LIGHT },
    { type: ChessPieceType.PAWN, color: ChessColor.LIGHT },
  ],
  [
    { type: ChessPieceType.ROOK, color: ChessColor.LIGHT },
    { type: ChessPieceType.KNIGHT, color: ChessColor.LIGHT },
    { type: ChessPieceType.BISHOP, color: ChessColor.LIGHT },
    { type: ChessPieceType.QUEEN, color: ChessColor.LIGHT },
    { type: ChessPieceType.KING, color: ChessColor.LIGHT },
    { type: ChessPieceType.BISHOP, color: ChessColor.LIGHT },
    { type: ChessPieceType.KNIGHT, color: ChessColor.LIGHT },
    { type: ChessPieceType.ROOK, color: ChessColor.LIGHT },
  ],
];

export const EmptyBoard: Story = () => {
  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "750px" }}>
        <ChessBoard chessPiecesMatrix={EMPTY_BOARD_MATRIX} />
      </div>
    </ThemeWrapper>
  );
};

export const FullBoard: Story = () => {
  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "750px" }}>
        <ChessBoard
          chessPiecesMatrix={STARTING_BOARD_MATRIX}
          onMove={(piece, newCoordinates) =>
            action("Piece moved")({ piece, newCoordinates })
          }
        />
      </div>
    </ThemeWrapper>
  );
};

export const FullBoardReversed: Story = () => {
  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "750px" }}>
        <ChessBoard
          chessPiecesMatrix={STARTING_BOARD_MATRIX}
          onMove={(piece, newCoordinates) =>
            action("Piece moved")({ piece, newCoordinates })
          }
          reversed
        />
      </div>
    </ThemeWrapper>
  );
};

export const FullBoardWithMovablePieces: Story = () => {
  const [matrix, setMatrix] = useState(STARTING_BOARD_MATRIX);

  const handleMove = (piece, prevCoordinates, nextCoordinates) => {
    setMatrix((prev) => {
      const newMatrix = [...prev];
      newMatrix[prevCoordinates.y][prevCoordinates.x] = null;
      newMatrix[nextCoordinates.y][nextCoordinates.x] = piece;
      return newMatrix;
    });
  };

  const disableDarkPiecesFromMoving = (piece) =>
    piece.color === ChessColor.DARK;

  const markSquaresInFrontOfPawnsAsLegal = (piece, coordinates) => {
    if (piece.type === ChessPieceType.PAWN) {
      return [{ x: coordinates.x, y: coordinates.y - 1 }];
    }
    return [];
  };

  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "750px" }}>
        <ChessBoard
          chessPiecesMatrix={matrix}
          onMove={(piece, prevCoordinates, nextCoordinates) => {
            action("Piece moved")({ piece, prevCoordinates, nextCoordinates });
            handleMove(piece, prevCoordinates, nextCoordinates);
          }}
          validatePieceDisabled={disableDarkPiecesFromMoving}
          calculateLegalMoves={markSquaresInFrontOfPawnsAsLegal}
        />
      </div>
    </ThemeWrapper>
  );
};
