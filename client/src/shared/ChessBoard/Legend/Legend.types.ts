import { Props as ChessBoardProps, Coordinates } from "../ChessBoard.types";

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
  hoveredCoordinates?: Coordinates;
  reversed?: boolean;
};

export type Props = {
  xAxisLabels?: AxisLabels;
  yAxisLabels?: AxisLabels;
  hoveredCoordinates?: Coordinates;
  reversed?: boolean;
};
