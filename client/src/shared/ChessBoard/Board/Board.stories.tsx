import React from "react";
import { Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ThemeWrapper } from "../../Theme";
import { Piece } from "../Piece";
import { Board } from ".";
import { ChessColor, ChessPieceType } from "../ChessBoard.types";

export default {
  title: "Shared / ChessBoard / Board",
};

export const EmptyBoard: Story = () => {
  const piecesMatrix = [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ];

  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "750px" }}>
        <Board
          piecesMatrix={piecesMatrix}
          onSquareHover={(coordinates) => action("Square hovered")(coordinates)}
        />
      </div>
    </ThemeWrapper>
  );
};

export const FullBoard: Story = () => {
  const piecesMatrix = [
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

  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "750px" }}>
        <Board
          piecesMatrix={piecesMatrix}
          onSquareHover={(coordinates) => action("Square hovered")(coordinates)}
        />
      </div>
    </ThemeWrapper>
  );
};

export const FullBoardReversed: Story = () => {
  const piecesMatrix = [
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

  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "750px" }}>
        <Board
          piecesMatrix={piecesMatrix}
          onSquareHover={(coordinates) => action("Square hovered")(coordinates)}
          reversed
        />
      </div>
    </ThemeWrapper>
  );
};
