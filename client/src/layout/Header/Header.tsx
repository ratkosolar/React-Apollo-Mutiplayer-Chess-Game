import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import { Flex, Container, Typography } from "../../shared";
import { Navigation } from "./Navigation";
import { Button } from "../../shared/Button";

const StyledHeader = styled.header`
  min-height: ${(p) => p.theme.unit(20)};
  padding: ${(p) => p.theme.unit(4)} 0;
  background: ${(p) => p.theme.colors.secondary.default};
  color: ${(p) => p.theme.colors.text.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledLogo = styled(Link)`
  color: #fff;
  line-height: 1;

  &:hover {
    text-decoration: none;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Flex container alignItems="center" gutter={4}>
          <Flex item>
            <StyledLogo to="/">
              <Typography as="span" type="h2">
                React Chess
              </Typography>
            </StyledLogo>
          </Flex>
          <Flex item grow={1}>
            <Navigation />
          </Flex>
          <Flex container item gutter={1}>
            <Link to="/login" className="btn btn--white">
              <Button variant="secondary">Login</Button>
            </Link>
            <Link to="/signup" className="btn btn--white">
              <Button variant="secondary">Sign up</Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </StyledHeader>
  );
};
