import React, { FC } from "react";
import styled from "styled-components";

import { Props } from "./Square.types";
import { ChessColor } from "../../ChessBoard.types";

const StyledSquare = styled.div<{
  $color: ChessColor;
  $highlighted?: boolean;
  $active?: boolean;
  $legalMove?: boolean;
}>`
  flex-grow: 1;
  position: relative;
  background-color: ${(p) =>
    p.$color === ChessColor.DARK
      ? p.theme.colors.primary.darker
      : p.theme.colors.primary.lighter};

  &::before {
    content: "";
    float: left;
    padding-top: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 4px solid transparent;
    z-index: 5;
    ${(p) => (p.$highlighted ? "border-color: yellow;" : "")}
    ${(p) => (p.$legalMove ? "background: rgba(0, 255, 0, 0.25);" : "")}
    ${(p) =>
      p.$active
        ? `
        top: 50%;
        left: 50%;
        right: auto;
        bottom: auto;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        background: yellow;
        transform: translate(-50%, -50%);
      `
        : ""}
  }
`;

export const Square: FC<Props> = ({
  children,
  color,
  active,
  highlighted,
  legalMove,
}) => {
  return (
    <StyledSquare
      $color={color}
      $active={active}
      $highlighted={highlighted}
      $legalMove={legalMove}
    >
      {children}
    </StyledSquare>
  );
};
