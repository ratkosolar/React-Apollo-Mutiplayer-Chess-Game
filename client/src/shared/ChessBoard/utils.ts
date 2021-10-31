import { ChessPieceType, ChessColor } from "./ChessBoard.types";
import { ChessPiecesMatrix } from "./Board/Board.types";

const getPieceColor = (string: string): ChessColor => {
  return string.charCodeAt(0) >= 97 ? ChessColor.DARK : ChessColor.LIGHT;
};

const getPieceType = (string: string): ChessPieceType => {
  switch (string.toLowerCase()) {
    case "r":
      return ChessPieceType.ROOK;
    case "n":
      return ChessPieceType.KNIGHT;
    case "b":
      return ChessPieceType.BISHOP;
    case "q":
      return ChessPieceType.QUEEN;
    case "k":
      return ChessPieceType.KING;
    case "p":
    default:
      return ChessPieceType.PAWN;
  }
};

export const mapFenStringToPiecesMatrix = (fen: string): ChessPiecesMatrix => {
  const fenRegex =
    /^\s*(?<board>[prnbqkPRNBQK12345678]{1,8}(\/[prnbqkPRNBQK12345678]{1,8}){7})\s+(?<color>[wb]{1})\s+(?<castling>[KQkq]{1,4}|-)(\s+(?<enpass>[a-h][36]|-))(\s+(?<halfMoves>\d{1,4}))?(\s+(?<fullMoves>\d{1,4}))?\s*$/;
  const match = fen.match(fenRegex);

  return (
    match?.groups?.board.split("/").map((rows) => {
      return rows
        .replace(/[1-8]+/g, (i) => "-".repeat(Number(i)))
        .split("")
        .map((piece) => {
          if (piece === "-") {
            return null;
          }
          return { type: getPieceType(piece), color: getPieceColor(piece) };
        });
    }) || [[]]
  );
};
