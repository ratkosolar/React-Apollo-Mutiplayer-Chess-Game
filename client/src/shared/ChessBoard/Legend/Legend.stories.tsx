import React from "react";
import { Story } from "@storybook/react";

import { ThemeWrapper } from "../../Theme";
import { Legend } from ".";

export default {
  title: "Shared / ChessBoard / Legend",
};

export const Default: Story = () => {
  return (
    <ThemeWrapper>
      <Legend />
    </ThemeWrapper>
  );
};

export const Reversed: Story = () => {
  return (
    <ThemeWrapper>
      <Legend reversed />
    </ThemeWrapper>
  );
};

export const Highlighted: Story = () => {
  return (
    <ThemeWrapper>
      <Legend hoveredSquare={{ x: 2, y: 4 }} />
    </ThemeWrapper>
  );
};

export const HighlightedReversed: Story = () => {
  return (
    <ThemeWrapper>
      <Legend hoveredSquare={{ x: 2, y: 4 }} reversed />
    </ThemeWrapper>
  );
};

export const CustomLabels: Story = () => {
  return (
    <ThemeWrapper>
      <Legend
        xAxisLabels={["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8"]}
        yAxisLabels={["y1", "y2", "y3", "y4", "y5", "y6", "y7", "y8"]}
      />
    </ThemeWrapper>
  );
};
