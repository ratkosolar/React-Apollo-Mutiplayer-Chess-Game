import React, { FC, useState } from "react";
import styled from "styled-components";

import { Coordinates, Props } from "./ChessBoard.types";
import { Board } from "./Board";
import { Legend } from "./Legend";

const StyledBoardWrapper = styled.div`
  position: relative;
  padding: 18px;
  background: ${(p) => p.theme.colors.primary.default};
  border: 2px solid ${(p) => p.theme.colors.secondary.dark};
`;

export const ChessBoard: FC<Props> = ({
  piecesMatrix,
  reversed,
  xAxisLabels,
  yAxisLabels,
}) => {
  const [hoveredCoordinates, setHoveredCoordinates] = useState<Coordinates>();

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
