import { ReactNode } from "react";

type MarginProps = {
  m?: number | string;
  mt?: number | string;
  mb?: number | string;
  ml?: number | string;
  mr?: number | string;
  mx?: number | string;
  my?: number | string;
};

type PaddingProps = {
  p?: number | string;
  pt?: number | string;
  pb?: number | string;
  pl?: number | string;
  pr?: number | string;
  px?: number | string;
  py?: number | string;
};

type StyleProps = MarginProps & PaddingProps;

export type Props = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  children?: ReactNode;
  xl?: StyleProps;
  lg?: StyleProps;
  md?: StyleProps;
  sm?: StyleProps;
  xs?: StyleProps;
} & StyleProps &
  React.HTMLAttributes<HTMLDivElement>;
