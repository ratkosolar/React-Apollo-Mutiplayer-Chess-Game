import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Props, StyledContainerProps } from "./Container.types";

const fullHeightStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

const StyledContainerInner = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 ${(p) => p.theme.unit(6)};

  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    padding: 0 ${(p) => p.theme.unit(4)};
  }
`;

const doNotForward = new Set(["fullHeight"]);
const StyledContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !doNotForward.has(prop),
})<StyledContainerProps>`
  ${(p) => p.fullHeight && fullHeightStyles}
`;

export const Container: FC<Props> = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <StyledContainer {...rest}>
      <StyledContainerInner>{children}</StyledContainerInner>
    </StyledContainer>
  );
};
