import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { isNil } from "ramda";
import { FlexProps } from "./Flex.types";

const getColumnStyles = (p, isReverse) => {
  return `
    & > *:not(:${isReverse ? "last-child" : "first-child"}) {
      padding-top: ${p.theme.unit(p.gutter * 2)};
    }

    margin-left: 0;
    margin-right: 0;

    & > * {
      padding-left: 0;
      padding-right: 0;
    }
  `;
};

const getRowStyles = (p) => {
  return `
    margin-left: -${p.theme.unit(p.gutter)};
    margin-right: -${p.theme.unit(p.gutter)};

    & > * {
      padding-left: ${p.theme.unit(p.gutter)};
      padding-right: ${p.theme.unit(p.gutter)};
    }

    & > *:not(:first-child) {
      padding-top: 0;
    }

    & > *:not(:last-child) {
      padding-top: 0;
    }
  `;
};

const getContainerStyles = (p) => {
  return `
    display: ${p.hidden ? "none" : "flex"};
    ${p.wrap ? `flex-wrap: ${p.wrap};` : ""}
    ${p.direction ? `flex-direction: ${p.direction};` : ""}
    ${p.justifyContent ? `justify-content: ${p.justifyContent};` : ""}
    ${p.alignItems ? `align-items: ${p.alignItems};` : ""}
    ${p.alignContent ? `alignContent: ${p.alignContent};` : ""}
    ${
      (!isNil(p.gutter) && p.direction === "column") ||
      p.direction === "column-reverse"
        ? getColumnStyles(p, p.direction === "column-reverse")
        : ""
    }
    ${
      (!isNil(p.gutter) && p.direction === "row") ||
      p.direction === "row-reverse"
        ? getRowStyles(p)
        : ""
    }
  `;
};

const getItemStyles = (p) => {
  return `
    ${p.hidden ? " display: none;" : ""}
    ${p.justifySelf ? `justify-self: ${p.justifySelf};` : ""}
    ${p.alignSelf ? `align-self: ${p.alignSelf};` : ""}
    ${
      p.size
        ? `
          flex-basis: ${(p.size / 12) * 100}%;
          width: ${(p.size / 12) * 100}%;
        `
        : ""
    }
    ${p.order ? `order: ${p.order};` : ""}
    ${p.grow ? `flex-grow: ${p.grow};` : ""}
    ${p.shrink ? `flex-shrink: ${p.shrink};` : ""}
    ${p.basis ? `flex-basis: ${p.basis};` : ""}
    ${p.flex ? `flex: ${p.flex};` : ""}
  `;
};

const getFlexStyles = (p) => {
  return `
    ${p.container ? getContainerStyles(p) : ""}
    ${p.item ? getItemStyles(p) : ""}
  `;
};

const getMediaQueryFlexStyles = (p, breakpoint) => {
  const breakpointProperties = {
    container: p.container,
    item: p.item,
    gutter: p.gutter,
    ...p[breakpoint],
    theme: p.theme,
  };
  return `
    @media(min-width: ${p.theme.breakpoints[breakpoint]}) {
      ${getFlexStyles(breakpointProperties)}
    }
  `;
};

const breakpoints = ["xs", "sm", "md", "lg", "xl"];
const doNotForward = new Set([
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "container",
  "item",
  "wrap",
  "flex",
  "size",
  "gutter",
  "direction",
  "justifyContent",
  "alignContent",
  "alignItems",
  "justifySelf",
  "alignSelf",
]);
const StyledFlex = styled.div.withConfig({
  shouldForwardProp: (prop) => !doNotForward.has(prop),
})<FlexProps>`
  ${(p) => `
    ${getFlexStyles(p)}
    ${breakpoints
      .map((breakpoint) =>
        p[breakpoint] ? getMediaQueryFlexStyles(p, breakpoint) : ""
      )
      .join(" ")}
  `}
`;

export const Flex: FC<FlexProps> = forwardRef(
  ({ children, direction = "row", ...props }, ref) => {
    return (
      <StyledFlex ref={ref} direction={direction} {...props}>
        {children}
      </StyledFlex>
    );
  }
);
