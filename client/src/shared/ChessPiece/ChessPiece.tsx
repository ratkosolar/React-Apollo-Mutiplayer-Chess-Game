import React, { FC } from "react";

import { Props } from "./ChessPiece.types";
import { IconDark, IconLight } from "./Icons";

export const ChessPiece: FC<Props> = ({ type, color }) => {
  const IconComponent = color === "light" ? IconLight : IconDark;

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
