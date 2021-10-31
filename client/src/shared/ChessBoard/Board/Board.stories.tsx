import React from "react";
import { Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ThemeWrapper } from "../../Theme";
import { Piece } from "../Piece";
import { Board } from ".";

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
      <Piece type="rook" color="dark" />,
      <Piece type="knight" color="dark" />,
      <Piece type="bishop" color="dark" />,
      <Piece type="king" color="dark" />,
      <Piece type="queen" color="dark" />,
      <Piece type="bishop" color="dark" />,
      <Piece type="knight" color="dark" />,
      <Piece type="rook" color="dark" />,
    ],
    [
      <Piece type="pawn" color="dark" />,
      <Piece type="pawn" color="dark" />,
      <Piece type="pawn" color="dark" />,
      <Piece type="pawn" color="dark" />,
      <Piece type="pawn" color="dark" />,
      <Piece type="pawn" color="dark" />,
      <Piece type="pawn" color="dark" />,
      <Piece type="pawn" color="dark" />,
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      <Piece type="pawn" color="light" />,
      <Piece type="pawn" color="light" />,
      <Piece type="pawn" color="light" />,
      <Piece type="pawn" color="light" />,
      <Piece type="pawn" color="light" />,
      <Piece type="pawn" color="light" />,
      <Piece type="pawn" color="light" />,
      <Piece type="pawn" color="light" />,
    ],
    [
      <Piece type="rook" color="light" />,
      <Piece type="knight" color="light" />,
      <Piece type="bishop" color="light" />,
      <Piece type="king" color="light" />,
      <Piece type="queen" color="light" />,
      <Piece type="bishop" color="light" />,
      <Piece type="knight" color="light" />,
      <Piece type="rook" color="light" />,
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
