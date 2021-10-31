import React from "react";
import { Story } from "@storybook/react";

import { ThemeWrapper } from "../../Theme";
import { Flex } from "../../Flex";
import { Square } from ".";
import { Piece } from "../Piece";
import { ChessColor, ChessPieceType } from "../ChessBoard.types";

export default {
  title: "Shared / ChessBoard / Square",
};

export const Light: Story = () => {
  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "100px" }}>
        <Flex container>
          <Square color={ChessColor.LIGHT} />
        </Flex>
      </div>
    </ThemeWrapper>
  );
};

export const Dark: Story = () => {
  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "100px" }}>
        <Flex container>
          <Square color={ChessColor.DARK} />
        </Flex>
      </div>
    </ThemeWrapper>
  );
};

export const WithPiece: Story = () => {
  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "100px" }}>
        <Flex container>
          <Square color={ChessColor.LIGHT}>
            <Piece type={ChessPieceType.QUEEN} color={ChessColor.DARK} />
          </Square>
        </Flex>
      </div>
    </ThemeWrapper>
  );
};
