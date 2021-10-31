import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  display: block;
`;

export const SvgBase = ({ children, ...props }) => (
  <StyledSvg viewBox="0 0 45 45" {...props}>
    {children}
  </StyledSvg>
);
