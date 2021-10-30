import React from "react";
import { Story } from "@storybook/react";

import { ThemeWrapper } from "../Theme";
import { Flex } from "../Flex";
import { ChessPiece } from ".";

export default {
  title: "Shared / ChessPiece",
};

export const All: Story = () => {
  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "200px" }}>
        <Flex container>
          <Flex item grow={1}>
            <ChessPiece type="rook" color="light" />
          </Flex>
          <Flex item grow={1}>
            <ChessPiece type="rook" color="dark" />
          </Flex>
        </Flex>
      </div>
      <div style={{ maxWidth: "200px" }}>
        <Flex container>
          <Flex item grow={1}>
            <ChessPiece type="knight" color="light" />
          </Flex>
          <Flex item grow={1}>
            <ChessPiece type="knight" color="dark" />
          </Flex>
        </Flex>
      </div>
      <div style={{ maxWidth: "200px" }}>
        <Flex container>
          <Flex item grow={1}>
            <ChessPiece type="bishop" color="light" />
          </Flex>
          <Flex item grow={1}>
            <ChessPiece type="bishop" color="dark" />
          </Flex>
        </Flex>
      </div>
      <div style={{ maxWidth: "200px" }}>
        <Flex container>
          <Flex item grow={1}>
            <ChessPiece type="pawn" color="light" />
          </Flex>
          <Flex item grow={1}>
            <ChessPiece type="pawn" color="dark" />
          </Flex>
        </Flex>
      </div>
      <div style={{ maxWidth: "200px" }}>
        <Flex container>
          <Flex item grow={1}>
            <ChessPiece type="queen" color="light" />
          </Flex>
          <Flex item grow={1}>
            <ChessPiece type="queen" color="dark" />
          </Flex>
        </Flex>
      </div>
      <div style={{ maxWidth: "200px" }}>
        <Flex container>
          <Flex item grow={1}>
            <ChessPiece type="king" color="light" />
          </Flex>
          <Flex item grow={1}>
            <ChessPiece type="king" color="dark" />
          </Flex>
        </Flex>
      </div>
    </ThemeWrapper>
  );
};
