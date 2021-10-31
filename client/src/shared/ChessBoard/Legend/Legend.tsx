import React, { FC, memo } from "react";
import styled from "styled-components";

import { Props, AxisLegendProps, AxisLabels, Placement } from "./Legend.types";

const StyledBoardLegendItem = styled.div<{ $highlighted: boolean }>`
  font-size: 12px;
  line-height: 1;
  font-weight: 700;
  color: #000;
  font-family: "Poppins", sans-serif;
  transition: background 0.15s;
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(p) =>
    p.$highlighted ? `background: ${p.theme.colors.primary.dark};` : ""}
`;

const StyledLegendHorizontal = styled.div<{
  $reversed?: boolean;
  $placement: Placement;
}>`
  display: flex;
  flex-direction: ${(p) => (p.$reversed ? "row-reverse" : "row")};
  padding: 0 18px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  ${(p) => (p.$placement === "bottom" ? `top: auto; bottom: 0;` : "")}

  & > ${StyledBoardLegendItem} {
    height: 18px;
  }
`;

const StyledLegendVertical = styled.div<{
  $reversed?: boolean;
  $placement: Placement;
}>`
  display: flex;
  flex-direction: ${(p) => (p.$reversed ? "column-reverse" : "column")};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 18px 0;
  ${(p) => (p.$placement === "right" ? `left: auto; right: 0;` : "")}

  & > ${StyledBoardLegendItem} {
    width: 18px;
  }
`;

const X_AXIS_LABELS_DEFAULT: AxisLabels = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
];
const Y_AXIS_LABELS_DEFAULT: AxisLabels = [
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
];

const AxisLegend: FC<AxisLegendProps> = ({
  placement,
  labels,
  hoveredSquare,
  reversed,
}) => {
  const isHorizontal = placement === "top" || placement === "bottom";
  const LegendComponent = isHorizontal
    ? StyledLegendHorizontal
    : StyledLegendVertical;
  const coordinate = isHorizontal ? hoveredSquare?.x : hoveredSquare?.y;

  return (
    <LegendComponent $placement={placement} $reversed={reversed}>
      {labels.map((label, index) => (
        <StyledBoardLegendItem key={index} $highlighted={coordinate === index}>
          {label}
        </StyledBoardLegendItem>
      ))}
    </LegendComponent>
  );
};

export const Legend: FC<Props> = memo(
  ({
    xAxisLabels = X_AXIS_LABELS_DEFAULT,
    yAxisLabels = Y_AXIS_LABELS_DEFAULT,
    hoveredSquare,
    reversed,
  }) => {
    return (
      <>
        <AxisLegend
          placement="top"
          labels={xAxisLabels}
          hoveredSquare={hoveredSquare}
          reversed={reversed}
        />
        <AxisLegend
          placement="bottom"
          labels={xAxisLabels}
          hoveredSquare={hoveredSquare}
          reversed={reversed}
        />
        <AxisLegend
          placement="left"
          labels={yAxisLabels}
          hoveredSquare={hoveredSquare}
          reversed={reversed}
        />
        <AxisLegend
          placement="right"
          labels={yAxisLabels}
          hoveredSquare={hoveredSquare}
          reversed={reversed}
        />
      </>
    );
  },
  (prevProps, nextProps) =>
    prevProps.hoveredSquare?.x === nextProps.hoveredSquare?.x &&
    prevProps.hoveredSquare?.y === nextProps.hoveredSquare?.y &&
    prevProps.xAxisLabels === nextProps.xAxisLabels &&
    prevProps.yAxisLabels === nextProps.yAxisLabels &&
    prevProps.reversed === nextProps.reversed
);
