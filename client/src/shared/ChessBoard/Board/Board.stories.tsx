import React from "react";
import { Story } from "@storybook/react";

import { ThemeWrapper } from "../../Theme";
import { Board } from ".";

export default {
  title: "Shared / ChessBoard / Board",
};

export const Default: Story = () => {
  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "750px" }}>
        <Board />
      </div>
    </ThemeWrapper>
  );
};
