import { css } from "styled-components";

export const h1Styles = css`
  margin: 0;
  font: 700 2.4em/1.2 ${(p) => p.theme.fonts.headings};

  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    font-size: 2em;
  }
`;

export const h2Styles = css`
  margin: 0;
  font: 700 2em/1.2 ${(p) => p.theme.fonts.headings};

  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    font-size: 1.6em;
  }
`;

export const h3Styles = css`
  margin: 0;
  font: 700 1.8em/1.2 ${(p) => p.theme.fonts.headings};

  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    font-size: 1.45em;
  }
`;

export const h4Styles = css`
  margin: 0;
  font: 700 1.6em/1.2 ${(p) => p.theme.fonts.headings};

  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    font-size: 1.25em;
  }
`;

export const h5Styles = css`
  margin: 0;
  font: 700 1.4em/1.2 ${(p) => p.theme.fonts.headings};

  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    font-size: 1.15em;
  }
`;

export const h6Styles = css`
  margin: 0;
  font: 700 1.2em/1.2 ${(p) => p.theme.fonts.headings};
`;

export const bodyStyles = css`
  margin: 0;
  font: 400 1em/1.6 ${(p) => p.theme.fonts.text};
`;

export const smallStyles = css`
  margin: 0;
  font: 400 0.875em/1.6 ${(p) => p.theme.fonts.text};
`;

export const bigStyles = css`
  margin: 0;
  font: 400 1.333em/1.6 ${(p) => p.theme.fonts.text};
`;

export const strongStyles = css`
  margin: 0;
  font: 700 1em/1.6 ${(p) => p.theme.fonts.headings};
`;
