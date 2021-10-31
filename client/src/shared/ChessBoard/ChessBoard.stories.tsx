import React from "react";
import { Story } from "@storybook/react";

import { ThemeWrapper } from "../Theme";
import { ChessBoard } from ".";

export default {
  title: "Shared / ChessBoard",
};

export const EmptyBoard: Story = () => {
  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "750px" }}>
        <ChessBoard fen="8/8/8/8/8/8/8/8 w KQkq - 0 1" />
      </div>
    </ThemeWrapper>
  );
};

export const FullBoard: Story = () => {
  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "750px" }}>
        <ChessBoard fen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1" />
      </div>
    </ThemeWrapper>
  );
};

export const FullBoardReversed: Story = () => {
  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "750px" }}>
        <ChessBoard
          fen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
          reversed
        />
      </div>
    </ThemeWrapper>
  );
};
