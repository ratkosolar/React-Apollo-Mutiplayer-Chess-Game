import React from "react";
import { Story } from "@storybook/react";

import { ThemeWrapper } from "../Theme";
import { ChessPiece } from "../ChessPiece";
import { ChessBoard } from ".";

export default {
  title: "Shared / ChessBoard",
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
        <ChessBoard piecesMatrix={piecesMatrix} />
      </div>
    </ThemeWrapper>
  );
};

export const FullBoard: Story = () => {
  const piecesMatrix = [
    [
      <ChessPiece type="rook" color="dark" />,
      <ChessPiece type="knight" color="dark" />,
      <ChessPiece type="bishop" color="dark" />,
      <ChessPiece type="king" color="dark" />,
      <ChessPiece type="queen" color="dark" />,
      <ChessPiece type="bishop" color="dark" />,
      <ChessPiece type="knight" color="dark" />,
      <ChessPiece type="rook" color="dark" />,
    ],
    [
      <ChessPiece type="pawn" color="dark" />,
      <ChessPiece type="pawn" color="dark" />,
      <ChessPiece type="pawn" color="dark" />,
      <ChessPiece type="pawn" color="dark" />,
      <ChessPiece type="pawn" color="dark" />,
      <ChessPiece type="pawn" color="dark" />,
      <ChessPiece type="pawn" color="dark" />,
      <ChessPiece type="pawn" color="dark" />,
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      <ChessPiece type="pawn" color="light" />,
      <ChessPiece type="pawn" color="light" />,
      <ChessPiece type="pawn" color="light" />,
      <ChessPiece type="pawn" color="light" />,
      <ChessPiece type="pawn" color="light" />,
      <ChessPiece type="pawn" color="light" />,
      <ChessPiece type="pawn" color="light" />,
      <ChessPiece type="pawn" color="light" />,
    ],
    [
      <ChessPiece type="rook" color="light" />,
      <ChessPiece type="knight" color="light" />,
      <ChessPiece type="bishop" color="light" />,
      <ChessPiece type="king" color="light" />,
      <ChessPiece type="queen" color="light" />,
      <ChessPiece type="bishop" color="light" />,
      <ChessPiece type="knight" color="light" />,
      <ChessPiece type="rook" color="light" />,
    ],
  ];

  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "750px" }}>
        <ChessBoard piecesMatrix={piecesMatrix} />
      </div>
    </ThemeWrapper>
  );
};
