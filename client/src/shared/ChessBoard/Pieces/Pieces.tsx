import React, { FC, memo, useMemo } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

import { Props } from "./Pieces.types";
import { Piece } from "./Piece";
import { convertChessPiecesMatrixToChessPiecesList } from "../utils";

const StyledPiece = styled.div<{
  $x: number;
  $y: number;
  $dragging?: boolean;
  $reversed?: boolean;
}>`
  position: absolute;
  top: ${(p) => (p.$reversed ? `${(7 - p.$y) * 12.5}%` : `${p.$y * 12.5}%`)};
  left: ${(p) => (p.$reversed ? `${(7 - p.$x) * 12.5}%` : `${p.$x * 12.5}%`)};
  width: 12.5%;
  height: 12.5%;
  z-index: ${(p) => (p.$dragging ? "15" : "10")};
`;

export const Pieces: FC<Props> = memo(
  ({
    chessPiecesMatrix,
    draggingPiece,
    onDragStart = () => {},
    onDragStop = () => {},
    validatePieceDisabled = () => false,
    reversed,
  }) => {
    const chessPieces = useMemo(() => {
      return convertChessPiecesMatrixToChessPiecesList(chessPiecesMatrix);
    }, [chessPiecesMatrix]);

    return (
      <>
        {chessPieces.map((piece) => (
          <Draggable
            key={`${piece.y}${piece.x}`}
            bounds="parent"
            axis="both"
            position={{ x: 0, y: 0 }}
            onStart={() => onDragStart(piece)}
            onStop={() => onDragStop(piece)}
            disabled={validatePieceDisabled(piece, { x: piece.x, y: piece.y })}
          >
            <StyledPiece
              $x={piece.x}
              $y={piece.y}
              $dragging={
                draggingPiece?.x === piece.x && draggingPiece?.y === piece.y
              }
              $reversed={reversed}
            >
              <Piece type={piece.type} color={piece.color} />
            </StyledPiece>
          </Draggable>
        ))}
      </>
    );
  },
  (prevProps, nextProps) =>
    prevProps.draggingPiece?.x === nextProps.draggingPiece?.x &&
    prevProps.draggingPiece?.y === nextProps.draggingPiece?.y &&
    prevProps.chessPiecesMatrix === nextProps.chessPiecesMatrix &&
    prevProps.onDragStart === nextProps.onDragStart &&
    prevProps.onDragStop === nextProps.onDragStop &&
    prevProps.validatePieceDisabled === nextProps.validatePieceDisabled &&
    prevProps.reversed === nextProps.reversed
);
