import { Coordinates } from "../ChessBoard.types";

export type Placement = "top" | "bottom" | "left" | "right";

export type AxisLabels = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

export type AxisLegendProps = {
  placement: Placement;
  labels: AxisLabels;
  hoveredSquare?: Coordinates;
  reversed?: boolean;
};

export type Props = {
  xAxisLabels?: AxisLabels;
  yAxisLabels?: AxisLabels;
  hoveredSquare?: Coordinates;
  reversed?: boolean;
};
