import { FC } from "react";

import { IconDarkRook } from "./IconDarkRook";
import { IconDarkKnight } from "./IconDarkKnight";
import { IconDarkBishop } from "./IconDarkBishop";
import { IconDarkPawn } from "./IconDarkPawn";
import { IconDarkQueen } from "./IconDarkQueen";
import { IconDarkKing } from "./IconDarkKing";

import { IconLightRook } from "./IconLightRook";
import { IconLightKnight } from "./IconLightKnight";
import { IconLightBishop } from "./IconLightBishop";
import { IconLightPawn } from "./IconLightPawn";
import { IconLightQueen } from "./IconLightQueen";
import { IconLightKing } from "./IconLightKing";

type ChessPieceIcon = {
  Rook: FC;
  Knight: FC;
  Bishop: FC;
  Pawn: FC;
  Queen: FC;
  King: FC;
};

export const IconDark: ChessPieceIcon = {
  Rook: IconDarkRook,
  Knight: IconDarkKnight,
  Bishop: IconDarkBishop,
  Pawn: IconDarkPawn,
  Queen: IconDarkQueen,
  King: IconDarkKing,
};

export const IconLight: ChessPieceIcon = {
  Rook: IconLightRook,
  Knight: IconLightKnight,
  Bishop: IconLightBishop,
  Pawn: IconLightPawn,
  Queen: IconLightQueen,
  King: IconLightKing,
};
