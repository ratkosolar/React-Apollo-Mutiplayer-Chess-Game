import React, { FC } from "react";
import styled, { css } from "styled-components";
import { cond, isNil } from "ramda";
import { isNumber, isString } from "../utils";
import { Props } from "./Box.types";

// prettier-ignore
const getCssString = (property: string, value: string | number | undefined) => cond([
  [() => isString(value), () => css`${property}: ${value};`],
  [() => isNumber(value), () => css`${property}: ${p => p.theme.unit(value)};`]
])(property, value);

const getStyles = (props: Props) => {
  const styles: string[] = [];

  if (!isNil(props.m)) styles.push(getCssString("margin", props.m));
  if (!isNil(props.p)) styles.push(getCssString("padding", props.p));

  if (!isNil(props.mx)) {
    styles.push(getCssString("margin-left", props.mx));
    styles.push(getCssString("margin-right", props.mx));
  }
  if (!isNil(props.my)) {
    styles.push(getCssString("margin-top", props.my));
    styles.push(getCssString("margin-bottom", props.my));
  }
  if (!isNil(props.px)) {
    styles.push(getCssString("padding-left", props.px));
    styles.push(getCssString("padding-right", props.px));
  }
  if (!isNil(props.py)) {
    styles.push(getCssString("padding-top", props.py));
    styles.push(getCssString("padding-bottom", props.py));
  }

  if (!isNil(props.mt)) styles.push(getCssString("margin-top", props.mt));
  if (!isNil(props.mb)) styles.push(getCssString("margin-bottom", props.mb));
  if (!isNil(props.ml)) styles.push(getCssString("margin-left", props.ml));
  if (!isNil(props.mr)) styles.push(getCssString("margin-right", props.mr));

  if (!isNil(props.pt)) styles.push(getCssString("padding-top", props.pt));
  if (!isNil(props.pb)) styles.push(getCssString("padding-bottom", props.pb));
  if (!isNil(props.pl)) styles.push(getCssString("padding-left", props.pl));
  if (!isNil(props.pr)) styles.push(getCssString("padding-right", props.pr));

  return styles;
};

const getMediaQueryStyles = (breakpoint: string) => css`
  @media (min-width: ${(p) => p.theme.breakpoints[breakpoint]}) {
    ${(p) => getStyles(p[breakpoint])}
  }
`;

const StyledBox = styled.div<Props>`
  ${(p) => getStyles(p)}
  ${(p) => (p.xs ? getMediaQueryStyles("xs") : "")}
  ${(p) => (p.sm ? getMediaQueryStyles("sm") : "")}
  ${(p) => (p.md ? getMediaQueryStyles("md") : "")}
  ${(p) => (p.lg ? getMediaQueryStyles("lg") : "")} 
  ${(p) => (p.xl ? getMediaQueryStyles("xl") : "")}
`;

export const Box: FC<Props> = ({ as = "div", ...props }) => {
  return <StyledBox as={as} {...props} />;
};
