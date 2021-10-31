import React from "react";
import { Story } from "@storybook/react";

import { ThemeWrapper } from "../../Theme";
import { Flex } from "../../Flex";
import { Piece } from ".";

export default {
  title: "Shared / ChessBoard / Piece",
};

export const All: Story = () => {
  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "200px" }}>
        <Flex container>
          <Flex item grow={1}>
            <Piece type="rook" color="light" />
          </Flex>
          <Flex item grow={1}>
            <Piece type="rook" color="dark" />
          </Flex>
        </Flex>
      </div>
      <div style={{ maxWidth: "200px" }}>
        <Flex container>
          <Flex item grow={1}>
            <Piece type="knight" color="light" />
          </Flex>
          <Flex item grow={1}>
            <Piece type="knight" color="dark" />
          </Flex>
        </Flex>
      </div>
      <div style={{ maxWidth: "200px" }}>
        <Flex container>
          <Flex item grow={1}>
            <Piece type="bishop" color="light" />
          </Flex>
          <Flex item grow={1}>
            <Piece type="bishop" color="dark" />
          </Flex>
        </Flex>
      </div>
      <div style={{ maxWidth: "200px" }}>
        <Flex container>
          <Flex item grow={1}>
            <Piece type="pawn" color="light" />
          </Flex>
          <Flex item grow={1}>
            <Piece type="pawn" color="dark" />
          </Flex>
        </Flex>
      </div>
      <div style={{ maxWidth: "200px" }}>
        <Flex container>
          <Flex item grow={1}>
            <Piece type="queen" color="light" />
          </Flex>
          <Flex item grow={1}>
            <Piece type="queen" color="dark" />
          </Flex>
        </Flex>
      </div>
      <div style={{ maxWidth: "200px" }}>
        <Flex container>
          <Flex item grow={1}>
            <Piece type="king" color="light" />
          </Flex>
          <Flex item grow={1}>
            <Piece type="king" color="dark" />
          </Flex>
        </Flex>
      </div>
    </ThemeWrapper>
  );
};
