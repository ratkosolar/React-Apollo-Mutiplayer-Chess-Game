import { ChessPiecesMatrix } from "./Board/Board.types";
import { AxisLabels } from "./Legend/Legend.types";

export type Coordinates = {
  x: number;
  y: number;
};

export type Props = {
  piecesMatrix: ChessPiecesMatrix;
  reversed?: boolean;
  xAxisLabels?: AxisLabels;
  yAxisLabels?: AxisLabels;
};
