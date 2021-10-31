import { ChessColor } from "../../ChessBoard.types";

export type Props = {
  color: ChessColor;
  highlighted?: boolean;
  active?: boolean;
  legalMove?: boolean;
};
