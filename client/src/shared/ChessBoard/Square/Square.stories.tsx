import React from "react";
import { Story } from "@storybook/react";

import { ThemeWrapper } from "../../Theme";
import { Flex } from "../../Flex";
import { Square } from ".";
import { Piece } from "../Piece";

export default {
  title: "Shared / ChessBoard / Square",
};

export const Light: Story = () => {
  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "100px" }}>
        <Flex container>
          <Square color="light"></Square>
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
          <Square color="dark"></Square>
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
          <Square color="light">
            <Piece type="queen" color="dark" />
          </Square>
        </Flex>
      </div>
    </ThemeWrapper>
  );
};
