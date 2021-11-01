import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";

const StyledNav = styled.nav``;

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const StyledLi = styled.li`
  margin: ${(p) => p.theme.unit(1)} ${(p) => p.theme.unit(3)};
`;

const StyledLink = styled(Link)`
  display: block;
  padding-bottom: ${(p) => p.theme.unit(1)};
  position: relative;
  color: ${(p) => p.theme.colors.text.white};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${(p) => p.theme.unit(0.5)};
    background: #fff;
    transform: scaleX(0);
    transition: transform 0.3s;
  }

  &:hover {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
  }

  &.active {
    &::after {
      transform: scaleX(1);
    }
  }
`;

export const Navigation = () => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/" activeClassName="active">
            Dashboard
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/app/game-history" activeClassName="active">
            Game History
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/app/rankings" activeClassName="active">
            Rankings
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/app/profile" activeClassName="active">
            Profile
          </StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};
