import React from "react";
import { Story } from "@storybook/react";

import { ThemeWrapper } from "../../../Theme";
import { Flex } from "../../../Flex";
import { Piece } from "./index";
import { ChessColor, ChessPieceType } from "../../ChessBoard.types";

export default {
  title: "Shared / ChessBoard / Piece",
};

export const All: Story = () => {
  return (
    <ThemeWrapper>
      <div style={{ maxWidth: "200px" }}>
        <Flex container>
          <Flex item grow={1}>
            <Piece type={ChessPieceType.ROOK} color={ChessColor.LIGHT} />
          </Flex>
          <Flex item grow={1}>
            <Piece type={ChessPieceType.ROOK} color={ChessColor.DARK} />
          </Flex>
        </Flex>
      </div>
      <div style={{ maxWidth: "200px" }}>
        <Flex container>
          <Flex item grow={1}>
            <Piece type={ChessPieceType.KNIGHT} color={ChessColor.LIGHT} />
          </Flex>
          <Flex item grow={1}>
            <Piece type={ChessPieceType.KNIGHT} color={ChessColor.DARK} />
          </Flex>
        </Flex>
      </div>
      <div style={{ maxWidth: "200px" }}>
        <Flex container>
          <Flex item grow={1}>
            <Piece type={ChessPieceType.BISHOP} color={ChessColor.LIGHT} />
          </Flex>
          <Flex item grow={1}>
            <Piece type={ChessPieceType.BISHOP} color={ChessColor.DARK} />
          </Flex>
        </Flex>
      </div>
      <div style={{ maxWidth: "200px" }}>
        <Flex container>
          <Flex item grow={1}>
            <Piece type={ChessPieceType.PAWN} color={ChessColor.LIGHT} />
          </Flex>
          <Flex item grow={1}>
            <Piece type={ChessPieceType.PAWN} color={ChessColor.DARK} />
          </Flex>
        </Flex>
      </div>
      <div style={{ maxWidth: "200px" }}>
        <Flex container>
          <Flex item grow={1}>
            <Piece type={ChessPieceType.QUEEN} color={ChessColor.LIGHT} />
          </Flex>
          <Flex item grow={1}>
            <Piece type={ChessPieceType.QUEEN} color={ChessColor.DARK} />
          </Flex>
        </Flex>
      </div>
      <div style={{ maxWidth: "200px" }}>
        <Flex container>
          <Flex item grow={1}>
            <Piece type={ChessPieceType.KING} color={ChessColor.LIGHT} />
          </Flex>
          <Flex item grow={1}>
            <Piece type={ChessPieceType.KING} color={ChessColor.DARK} />
          </Flex>
        </Flex>
      </div>
    </ThemeWrapper>
  );
};
