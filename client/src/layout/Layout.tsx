import React from "react";
import styled from "styled-components";

import { Container, Flex, ThemeWrapper } from "../shared";
import { ApolloProvider } from "../providers";
import { Header } from "./Header";
import { Footer } from "./Footer";

const StyledLayout = styled(Flex)`
  min-height: 100vh;
`;

const StyledMain = styled.main`
  position: relative;
  min-height: ${(p) => p.theme.unit(85)};
  padding: ${(p) => p.theme.unit(5)} 0;
`;

const Layout = ({ children }) => {
  return (
    <ThemeWrapper>
      <ApolloProvider>
        <StyledLayout container direction="column">
          <Header />
          <Flex item grow={1}>
            <StyledMain>
              <Container>{children}</Container>
            </StyledMain>
          </Flex>
          <Footer />
        </StyledLayout>
      </ApolloProvider>
    </ThemeWrapper>
  );
};

export default Layout;
