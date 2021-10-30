import { ComponentType, ReactNode, Ref } from "react";

export type FlexAlignment =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type FlexStyleProps = {
  className?: string;
  container?: boolean;
  item?: boolean;
  wrap?: string;
  flex?: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gutter?: number;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?: FlexAlignment;
  alignContent?: FlexAlignment;
  alignItems?: FlexAlignment;
  justifySelf?: FlexAlignment;
  alignSelf?: FlexAlignment;
  order?: number;
  grow?: number;
  shrink?: number;
  basis?: string;
  hidden?: boolean;
  ref?: Ref<any>;
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
};

export type FlexProps = {
  children: ReactNode;
  xl?: FlexStyleProps;
  lg?: FlexStyleProps;
  md?: FlexStyleProps;
  sm?: FlexStyleProps;
  xs?: FlexStyleProps;
} & FlexStyleProps;
