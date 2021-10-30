import React, { FC, forwardRef, Ref } from "react";
import styled from "styled-components";
import { TypographyProps, StyledTypographyProps } from "./Typography.types";
import {
  h1Styles,
  h2Styles,
  h3Styles,
  h4Styles,
  h5Styles,
  h6Styles,
  bodyStyles,
  bigStyles,
  smallStyles,
  strongStyles,
} from "./Typography.styles";

const typeStyles = {
  h1: h1Styles,
  h2: h2Styles,
  h3: h3Styles,
  h4: h4Styles,
  h5: h5Styles,
  h6: h6Styles,
  body: bodyStyles,
  big: bigStyles,
  small: smallStyles,
  strong: strongStyles,
};

const notForwardedProps = new Set(["color", "type", "weight", "font", "as"]);
const StyledTypography = styled.span.withConfig({
  shouldForwardProp: (prop) => !notForwardedProps.has(prop),
})<StyledTypographyProps>`
  margin: 0;

  ${(p) => p.type && typeStyles[p.type]}
  ${(p) => p.color && `color: ${p.color(p.theme.colors)};`}
  ${(p) => p.weight && `font-weight: ${p.weight};`}
  ${(p) => p.font && `font-family: ${p.theme.fonts[p.font]};`}
`;

export const Typography: FC<TypographyProps> = forwardRef(
  ({ as = "span", children, ...props }: TypographyProps, ref: Ref<any>) => {
    return (
      <StyledTypography as={as} {...props} ref={ref}>
        {children}
      </StyledTypography>
    );
  }
);
