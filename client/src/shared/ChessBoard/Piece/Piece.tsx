import React, { FC } from "react";

import { Props } from "./Piece.types";
import { PieceDark, PieceLight } from "./Icons";

export const Piece: FC<Props> = ({ type, color }) => {
  const IconComponent = color === "light" ? PieceLight : PieceDark;

  switch (type) {
    case "rook":
      return <IconComponent.Rook />;
    case "knight":
      return <IconComponent.Knight />;
    case "bishop":
      return <IconComponent.Bishop />;
    case "queen":
      return <IconComponent.Queen />;
    case "king":
      return <IconComponent.King />;
    case "pawn":
      return <IconComponent.Pawn />;
    default:
      return null;
  }
};
