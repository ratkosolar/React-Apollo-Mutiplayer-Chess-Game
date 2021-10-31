import React, { FC, useCallback, useRef, useState } from "react";
import styled from "styled-components";

import { Coordinates, Props } from "./ChessBoard.types";
import { Board } from "./Board";
import { Legend } from "./Legend";
import { Pieces } from "./Pieces";
import { calculateHoveredSquareCoordinates } from "./utils";
import { ChessPieceWithCoordinates } from "./Pieces/Pieces.types";

const StyledChessBoard = styled.div`
  position: relative;
  padding: 18px;
  background: ${(p) => p.theme.colors.primary.default};
  border: 2px solid ${(p) => p.theme.colors.secondary.dark};
`;

const StyledBoardWrapper = styled.div`
  position: relative;
`;

export const ChessBoard: FC<Props> = ({
  chessPiecesMatrix,
  onMove = () => {},
  validatePieceDisabled,
  calculateLegalMoves,
  reversed,
  xAxisLabels,
  yAxisLabels,
}) => {
  const boardRef = useRef<HTMLDivElement | null>();
  const hoveredSquareRef = useRef<Coordinates>();
  const [hoveredSquare, setHoveredSquare] = useState<Coordinates>();
  const [draggingPiece, setDraggingPiece] =
    useState<ChessPieceWithCoordinates>();

  const handleBoardMouseMove = useCallback(
    (event) => {
      if (!boardRef.current) return;
      const clientRect = boardRef.current.getBoundingClientRect();
      const newHoveredSquare = calculateHoveredSquareCoordinates(
        event,
        clientRect,
        reversed
      );
      setHoveredSquare(newHoveredSquare);
      hoveredSquareRef.current = newHoveredSquare;
    },
    [reversed, setHoveredSquare]
  );

  const handlePieceDragStart = useCallback(
    (piece) => {
      setDraggingPiece(piece);
    },
    [setDraggingPiece]
  );

  const handlePieceDragStop = useCallback(
    (piece) => {
      setDraggingPiece(undefined);
      if (
        hoveredSquareRef.current &&
        (hoveredSquareRef.current.x !== piece.x ||
          hoveredSquareRef.current.y !== piece.y)
      ) {
        // async move because of react-draggable
        setTimeout(() => {
          onMove(
            { type: piece.type, color: piece.color },
            { x: piece.x, y: piece.y },
            hoveredSquareRef.current as Coordinates
          );
        });
      }
    },
    [setDraggingPiece]
  );

  return (
    <StyledChessBoard>
      <Legend
        xAxisLabels={xAxisLabels}
        yAxisLabels={yAxisLabels}
        hoveredSquare={hoveredSquare}
        reversed={reversed}
      />
      <StyledBoardWrapper
        ref={(el) => (boardRef.current = el)}
        onMouseMove={handleBoardMouseMove}
      >
        <Board
          reversed={reversed}
          draggingPiece={draggingPiece}
          hoveredSquare={hoveredSquare}
          calculateLegalMoves={calculateLegalMoves}
        />
        <Pieces
          chessPiecesMatrix={chessPiecesMatrix}
          draggingPiece={draggingPiece}
          onDragStart={handlePieceDragStart}
          onDragStop={handlePieceDragStop}
          validatePieceDisabled={validatePieceDisabled}
          reversed={reversed}
        />
      </StyledBoardWrapper>
    </StyledChessBoard>
  );
};
