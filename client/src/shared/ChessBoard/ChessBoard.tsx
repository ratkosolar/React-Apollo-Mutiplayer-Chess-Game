import React, { FC, useState, useMemo } from "react";
import styled from "styled-components";

import { Coordinates, Props } from "./ChessBoard.types";
import { Board } from "./Board";
import { Legend } from "./Legend";
import { mapFenStringToPiecesMatrix } from "./utils";

const StyledBoardWrapper = styled.div`
  position: relative;
  padding: 18px;
  background: ${(p) => p.theme.colors.primary.default};
  border: 2px solid ${(p) => p.theme.colors.secondary.dark};
`;

export const ChessBoard: FC<Props> = ({
  fen,
  reversed,
  xAxisLabels,
  yAxisLabels,
}) => {
  const [hoveredCoordinates, setHoveredCoordinates] = useState<Coordinates>();

  const piecesMatrix = useMemo(() => {
    return mapFenStringToPiecesMatrix(fen);
  }, [fen]);

  return (
    <StyledBoardWrapper>
      <Legend
        xAxisLabels={xAxisLabels}
        yAxisLabels={yAxisLabels}
        hoveredCoordinates={hoveredCoordinates}
        reversed={reversed}
      />
      <Board
        piecesMatrix={piecesMatrix}
        reversed={reversed}
        onSquareHover={(coordinates) => setHoveredCoordinates(coordinates)}
      />
    </StyledBoardWrapper>
  );
};
