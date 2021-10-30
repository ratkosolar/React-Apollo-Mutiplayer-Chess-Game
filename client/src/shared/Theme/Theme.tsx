import React, { FC } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { Props, Theme } from "./Theme.types";

const colorPrimary = {
  lightest: "#cac2b5",
  lighter: "#d5cec4",
  light: "#cac2b5",
  default: "#edd4b2",
  dark: "#d0a98f",
  darker: "#9f917a",
  darkest: "#d0a98f",
};

const colorSecondary = {
  lightest: "#5d374e",
  lighter: "#5d374e",
  light: "#5d374e",
  default: "#4d243d",
  dark: "#321727",
  darker: "#321727",
  darkest: "#321727",
};

const colorSuccess = {
  default: "rgb(2, 162, 2)",
};

const colorDanger = {
  default: "rgb(196, 5, 5)",
};

const colors = {
  primary: colorPrimary,
  secondary: colorSecondary,
  success: colorSuccess,
  danger: colorDanger,
  text: {
    heading: "#000",
    body: "#333",
    link: colorSecondary.default,
    accent: colorSecondary.default,
  },
};

const breakpoints = {
  xl: "1200px",
  lg: "980px",
  md: "768px",
  sm: "540px",
  xs: "320px",
};

const zIndexes = {};

const fonts = {
  headings: `"Raleway", Helvetica, Arial, sans-serif`,
  text: `"Lato", Helvetica, Arial, sans-serif`,
};

export const theme: Theme = {
  colors,
  breakpoints,
  zIndexes,
  fonts,
  unit: (size) => `${size * 4}px`,
};

const GlobalStyles = createGlobalStyle`
  ${normalize}

  html, body {
    overflow-x: hidden;
  }

  body {
    color: ${theme.colors.text.body};
    font-size: 112.5%;
    line-height: 1.6;
    font-family: ${theme.fonts.text};

    @media (max-width: ${theme.breakpoints.lg}) {
      font-size: 100%;
    }
  }
  p {
     margin: ${theme.unit(3)} 0 0;
  }

  ::selection {
    background: ${theme.colors.secondary.default};
  }
  ::-moz-selection {
    background: ${theme.colors.secondary.default};
  }

  a {
    color: ${theme.colors.text.link};
    transition: color 0.2s;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    strong {
      color: ${theme.colors.text.link};
    }
  }

  * {
    box-sizing: border-box;
  }
`;

export const ThemeWrapper: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
