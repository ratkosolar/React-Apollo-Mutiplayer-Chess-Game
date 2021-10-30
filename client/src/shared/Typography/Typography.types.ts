import { ReactNode, ComponentType } from "react";

type TypographyType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "strong"
  | "body"
  | "big"
  | "small";

type TypographyWeight = "300" | "400" | "500" | "600" | "700";

type TypographyFont = "headings" | "text";

export type StyledTypographyProps = {
  type?: TypographyType;
  color?: (theme: any) => string;
  weight?: TypographyWeight;
  font?: TypographyFont;
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
};

export type TypographyProps = StyledTypographyProps & {
  children?: ReactNode;
};
