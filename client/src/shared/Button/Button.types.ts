import { ReactNode, MouseEvent, DOMAttributes } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

export type TransientProps = {
  $variant: Variant;
  $size: Size;
  $fullWidth?: boolean;
};

export type Props = {
  variant?: Variant;
  fullWidth?: boolean;
  size?: Size;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  type?: "button" | "reset" | "submit";
  children?: ReactNode;
} & Pick<
  DOMAttributes<HTMLButtonElement | HTMLAnchorElement>,
  "onMouseEnter" | "onMouseLeave" | "onMouseOver"
>;
