import React, { FC } from "react";
import styled from "styled-components";

const StyledText = styled.h1`
  color: red;
`;

const Home: FC = () => {
  return (
    <>
      <StyledText>Hello world!</StyledText>
      <a href="#">Test link</a>
    </>
  );
};

export default Home;
