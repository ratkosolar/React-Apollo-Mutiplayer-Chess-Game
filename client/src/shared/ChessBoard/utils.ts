import { ChessPiecesMatrix, Coordinates } from "./ChessBoard.types";
import { ChessPieceWithCoordinates } from "./Pieces/Pieces.types";

// const getPieceColor = (string: string): ChessColor => {
//   return string.charCodeAt(0) >= 97 ? ChessColor.DARK : ChessColor.LIGHT;
// };
//
// const getPieceType = (string: string): ChessPieceType => {
//   switch (string.toLowerCase()) {
//     case "r":
//       return ChessPieceType.ROOK;
//     case "n":
//       return ChessPieceType.KNIGHT;
//     case "b":
//       return ChessPieceType.BISHOP;
//     case "q":
//       return ChessPieceType.QUEEN;
//     case "k":
//       return ChessPieceType.KING;
//     case "p":
//     default:
//       return ChessPieceType.PAWN;
//   }
// };
//
// export const mapFenStringToChessPieces = (fen: string): ChessPiece[] => {
//   const fenRegex =
//     /^\s*(?<board>[prnbqkPRNBQK12345678]{1,8}(\/[prnbqkPRNBQK12345678]{1,8}){7})\s+(?<color>[wb]{1})\s+(?<castling>[KQkq]{1,4}|-)(\s+(?<enpass>[a-h][36]|-))(\s+(?<halfMoves>\d{1,4}))?(\s+(?<fullMoves>\d{1,4}))?\s*$/;
//   const match = fen.match(fenRegex);
//
//   return match?.groups?.board
//     .split("/")
//     .reduce<ChessPiece[]>((acc, rows, y) => {
//       rows
//         .replace(/[1-8]+/g, (i) => "-".repeat(Number(i)))
//         .split("")
//         .forEach((piece, x) => {
//           if (piece !== "-") {
//             acc.push({
//               type: getPieceType(piece),
//               color: getPieceColor(piece),
//               coordinates: { x, y },
//             });
//           }
//         });
//       return acc;
//     }, []) as ChessPiece[];
// };

export const convertChessPiecesMatrixToChessPiecesList = (
  chessPiecesMatrix: ChessPiecesMatrix
): ChessPieceWithCoordinates[] => {
  return chessPiecesMatrix.reduce<ChessPieceWithCoordinates[]>(
    (acc, row, y) => {
      row.forEach((item, x) => {
        if (item !== null) {
          acc.push({
            ...item,
            x,
            y,
          });
        }
      });
      return acc;
    },
    []
  );
};

export const calculateHoveredSquareCoordinates = (
  event: MouseEvent,
  boardDOMRect: DOMRect,
  reversed?: boolean
): Coordinates => {
  const boardTop = boardDOMRect.top;
  const boardLeft = boardDOMRect.left;
  const squareWidth = boardDOMRect.width / 8;
  const mouseX = event.clientX - boardLeft;
  const mouseY = event.clientY - boardTop;

  const hoveredSquareX = Math.floor(mouseX / squareWidth);
  const hoveredSquareY = Math.floor(mouseY / squareWidth);

  return {
    x: reversed ? 7 - hoveredSquareX : hoveredSquareX,
    y: reversed ? 7 - hoveredSquareY : hoveredSquareY,
  };
};
