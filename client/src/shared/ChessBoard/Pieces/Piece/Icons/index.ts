import { FC } from "react";

import { PieceDarkRookIcon } from "./PieceDarkRookIcon";
import { PieceDarkKnightIcon } from "./PieceDarkKnightIcon";
import { PieceDarkBishopIcon } from "./PieceDarkBishopIcon";
import { PieceDarkPawnIcon } from "./PieceDarkPawnIcon";
import { PieceDarkQueenIcon } from "./PieceDarkQueenIcon";
import { PieceDarkKingIcon } from "./PieceDarkKingIcon";

import { PieceLightRookIcon } from "./PieceLightRookIcon";
import { PieceLightKnightIcon } from "./PieceLightKnightIcon";
import { PieceLightBishopIcon } from "./PieceLightBishopIcon";
import { PieceLightPawnIcon } from "./PieceLightPawnIcon";
import { PieceLightQueenIcon } from "./PieceLightQueenIcon";
import { PieceLightKingIcon } from "./PieceLightKingIcon";

type PieceIcon = {
  Rook: FC;
  Knight: FC;
  Bishop: FC;
  Pawn: FC;
  Queen: FC;
  King: FC;
};

export const PieceDark: PieceIcon = {
  Rook: PieceDarkRookIcon,
  Knight: PieceDarkKnightIcon,
  Bishop: PieceDarkBishopIcon,
  Pawn: PieceDarkPawnIcon,
  Queen: PieceDarkQueenIcon,
  King: PieceDarkKingIcon,
};

export const PieceLight: PieceIcon = {
  Rook: PieceLightRookIcon,
  Knight: PieceLightKnightIcon,
  Bishop: PieceLightBishopIcon,
  Pawn: PieceLightPawnIcon,
  Queen: PieceLightQueenIcon,
  King: PieceLightKingIcon,
};
