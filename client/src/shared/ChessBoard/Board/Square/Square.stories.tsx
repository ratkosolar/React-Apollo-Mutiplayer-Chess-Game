import React from "react";
import { Story } from "@storybook/react";

import { ThemeWrapper } from "../../../Theme";
import { Flex } from "../../../Flex";
import { Square } from ".";
import { ChessColor } from "../../ChessBoard.types";

export default {
  title: "Shared / ChessBoard / Board / Square",
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
