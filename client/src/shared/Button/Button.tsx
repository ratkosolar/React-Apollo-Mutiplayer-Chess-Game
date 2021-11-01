import React, { FC, forwardRef, Ref } from "react";
import styled, { css } from "styled-components";

import { Props, TransientProps } from "./Button.types";

const buttonStyles = css<TransientProps>`
  font-size: 1rem;
  display: inline-block;
  padding: ${(p) => p.theme.unit(2)} ${(p) => p.theme.unit(4)};
  border: none;
  text-decoration: none;
  margin: ${(p) => p.theme.unit(1)} 0;
  border-radius: ${(p) => p.theme.unit(1)};
  min-width: ${(p) => p.theme.unit(25)};
  text-align: center;
  transition: background 0.2s;
  cursor: pointer;

  ${(p) => (p.$fullWidth ? "display: block; width: 100%;" : "")}
  ${(p) =>
    p.$size === "sm"
      ? `font-size: 0.925rem; padding: ${p.theme.unit(1)} ${p.theme.unit(3)};`
      : ""}
  ${(p) =>
    p.$size === "lg"
      ? `font-size: 1.2rem; padding: ${p.theme.unit(3)} ${p.theme.unit(5)};`
      : ""}

  &:disabled {
    cursor: not-allowed;
    pointer-events: all;
    opacity: 0.6;
  }
`;

const primaryStyles = css`
  color: #fff;
  background: ${(p) => p.theme.colors.secondary.default};

  &:hover {
    background: ${(p) => p.theme.colors.secondary.lighter};
  }

  &:disabled {
    &:hover {
      background: ${(p) => p.theme.colors.secondary.default};
    }
  }
`;

const secondaryStyles = css`
  background: #fff;
  color: ${(p) => p.theme.colors.secondary.default};

  &:hover {
    background: ${(p) => p.theme.colors.primary.light};
  }

  &:disabled {
    &:hover {
      background: #fff;
    }
  }
`;

const getButtonVariantStyles = (p) => {
  switch (p.$variant) {
    case "primary":
      return primaryStyles;
    case "secondary":
      return secondaryStyles;
  }
  return "";
};

const StyledButton = styled.button<TransientProps>`
  ${buttonStyles}
  ${getButtonVariantStyles}
`;

export const Button: FC<Props> = forwardRef(
  (
    {
      variant = "primary",
      fullWidth = false,
      size = "md",
      disabled = false,
      type = "button",
      children,
      ...props
    },
    ref: Ref<any>
  ) => {
    return (
      <StyledButton
        ref={ref}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        type={type}
        disabled={disabled}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);
