import React, { FC } from "react";

import { Props } from "./Piece.types";
import { ChessColor, ChessPieceType } from "../../ChessBoard.types";
import { PieceDark, PieceLight } from "./Icons";

export const Piece: FC<Props> = ({ type, color }) => {
  const IconComponent = color === ChessColor.LIGHT ? PieceLight : PieceDark;
  switch (type) {
    case ChessPieceType.ROOK:
      return <IconComponent.Rook />;
    case ChessPieceType.KNIGHT:
      return <IconComponent.Knight />;
    case ChessPieceType.BISHOP:
      return <IconComponent.Bishop />;
    case ChessPieceType.QUEEN:
      return <IconComponent.Queen />;
    case ChessPieceType.KING:
      return <IconComponent.King />;
    case ChessPieceType.PAWN:
      return <IconComponent.Pawn />;
    default:
      return null;
  }
};
