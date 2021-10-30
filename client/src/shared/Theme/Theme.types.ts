import { ReactNode } from "react";

type Color = {
  darkest?: string;
  darker?: string;
  dark?: string;
  default: string;
  light?: string;
  lighter?: string;
  lightest?: string;
};

type Breakpoints = {
  xl?: string;
  lg?: string;
  md?: string;
  sm?: string;
  xs?: string;
};

type ZIndexes = Record<string, number>;

type Fonts = Record<string, string>;

export type Theme = {
  colors: Record<string, Color | any>;
  breakpoints: Breakpoints;
  zIndexes: ZIndexes;
  fonts: Fonts;
  unit: (size: number) => string;
};

export type Props = {
  children: ReactNode;
};
