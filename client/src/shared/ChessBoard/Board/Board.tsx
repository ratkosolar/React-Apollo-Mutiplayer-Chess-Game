import React, { FC, memo, useMemo } from "react";
import styled from "styled-components";

import { LegalMovesMap, Props } from "./Board.types";
import { ChessColor } from "../ChessBoard.types";
import { Square } from "./Square";

const StyledBoard = styled.div<{ $reversed?: boolean }>`
  display: flex;
  flex-direction: ${(p) => (p.$reversed ? "column-reverse" : "column")};
  border: 2px solid ${(p) => p.theme.colors.secondary.dark};
`;

const StyledBoardRow = styled.div<{ $reversed?: boolean }>`
  display: flex;
  flex-direction: ${(p) => (p.$reversed ? "row-reverse" : "row")};
`;

const SQUARES_MATRIX: null[][] = Array(8).fill(Array(8).fill(null));

export const Board: FC<Props> = memo(
  ({
    hoveredSquare,
    draggingPiece,
    reversed,
    calculateLegalMoves = () => [],
  }) => {
    const legalMovesMap = useMemo(() => {
      if (draggingPiece) {
        const legalMoves = calculateLegalMoves(draggingPiece, {
          x: draggingPiece.x,
          y: draggingPiece.y,
        });
        return legalMoves.reduce<LegalMovesMap>(
          (acc, item) => ({
            ...acc,
            [`${item.y}${item.x}`]: true,
          }),
          {}
        );
      }
      return [];
    }, [calculateLegalMoves, draggingPiece]);

    return (
      <StyledBoard $reversed={reversed}>
        {SQUARES_MATRIX.map((row, y) => (
          <StyledBoardRow key={y} $reversed={reversed}>
            {row.map((square, x) => (
              <Square
                key={`${y}${x}`}
                color={(x + y) % 2 === 0 ? ChessColor.LIGHT : ChessColor.DARK}
                active={draggingPiece?.x === x && draggingPiece?.y === y}
                legalMove={legalMovesMap[`${y}${x}`]}
                highlighted={
                  draggingPiece &&
                  hoveredSquare?.x === x &&
                  hoveredSquare?.y === y
                }
              />
            ))}
          </StyledBoardRow>
        ))}
      </StyledBoard>
    );
  },
  (prevProps, nextProps) =>
    prevProps.draggingPiece?.x === nextProps.draggingPiece?.x &&
    prevProps.draggingPiece?.y === nextProps.draggingPiece?.y &&
    prevProps.hoveredSquare?.x === nextProps.hoveredSquare?.x &&
    prevProps.hoveredSquare?.y === nextProps.hoveredSquare?.y &&
    prevProps.calculateLegalMoves === nextProps.calculateLegalMoves &&
    prevProps.reversed === nextProps.reversed
);
