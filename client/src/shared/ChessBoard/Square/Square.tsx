import React, { FC } from "react";
import styled from "styled-components";

import { Props } from "./Square.types";

const StyledSquare = styled.div<{ $color: "light" | "dark" }>`
  flex-grow: 1;
  position: relative;
  background-color: ${(p) =>
    p.$color === "dark"
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
  }
`;

export const Square: FC<Props> = ({ children, color }) => {
  return <StyledSquare $color={color}>{children}</StyledSquare>;
};
