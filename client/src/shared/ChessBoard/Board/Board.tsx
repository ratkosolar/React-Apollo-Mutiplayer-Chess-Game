import React, { FC, memo, useCallback, useRef } from "react";
import styled from "styled-components";
import { Square } from "../Square";

import { Props } from "./Board.types";
import { Piece } from "../Piece";
import { ChessColor, ChessPiece } from "../ChessBoard.types";

const StyledBoard = styled.div<{ $reversed?: boolean }>`
  display: flex;
  flex-direction: ${(p) => (p.$reversed ? "column-reverse" : "column")};
  border: 2px solid ${(p) => p.theme.colors.secondary.dark};
`;

const StyledBoardRow = styled.div<{ $reversed?: boolean }>`
  display: flex;
  flex-direction: ${(p) => (p.$reversed ? "row-reverse" : "row")};
`;

const squaresMatrix = Array(8).fill(Array(8).fill(null));

export const Board: FC<Props> = memo(
  ({ piecesMatrix, onSquareHover, reversed }) => {
    const boardRef = useRef<HTMLDivElement | null>();

    const handleBoardMouseMove = useCallback(
      (event) => {
        if (!boardRef.current) return;

        const clientRect = boardRef.current.getBoundingClientRect();

        const boardTop = clientRect.top;
        const boardLeft = clientRect.left;
        const squareWidth = clientRect.width / 8;
        const mouseX = event.clientX - boardLeft;
        const mouseY = event.clientY - boardTop;

        const hoveredSquareX = Math.floor(mouseX / squareWidth);
        const hoveredSquareY = Math.floor(mouseY / squareWidth);

        onSquareHover({
          x: reversed ? 7 - hoveredSquareX : hoveredSquareX,
          y: reversed ? 7 - hoveredSquareY : hoveredSquareY,
        });
      },
      [reversed, onSquareHover]
    );

    return (
      <StyledBoard
        ref={(el) => (boardRef.current = el)}
        onMouseLeave={() => onSquareHover(undefined)}
        onMouseMove={handleBoardMouseMove}
        $reversed={reversed}
      >
        {squaresMatrix.map((squares, y) => (
          <StyledBoardRow key={y} $reversed={reversed}>
            {squares.map((square, x) => (
              <Square
                key={`${y}${x}`}
                color={(x + y) % 2 === 0 ? ChessColor.LIGHT : ChessColor.DARK}
              >
                {piecesMatrix?.[y]?.[x] && (
                  <Piece
                    type={(piecesMatrix[y][x] as ChessPiece).type}
                    color={(piecesMatrix[y][x] as ChessPiece).color}
                  />
                )}
              </Square>
            ))}
          </StyledBoardRow>
        ))}
      </StyledBoard>
    );
  },
  (prevProps, newProps) => prevProps.onSquareHover !== newProps.onSquareHover
);
