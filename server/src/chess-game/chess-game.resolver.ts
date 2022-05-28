import { protectedResolver } from '../auth';
import { createChessGame, joinChessGame, makeChessGameMove } from './mutations';
import { chessGames, chessGamesCount, chessGame } from './queries';
import { user } from '../user/queries';

const ChessGame = {
  playerOne: (parent) => user({ id: parent.playerOneID }),
  playerTwo: (parent) => user({ id: parent.playerTwoID }),
  winner: (parent) => user({ id: parent.winnerID }),
};

const Query = {
  chessGames: protectedResolver((jwtPayload, parent, args) => chessGames(args)),
  chessGamesCount: protectedResolver((jwtPayload, parent, args) => chessGamesCount(args)),
  chessGame: protectedResolver((jwtPayload, parent, args) => chessGame(args)),
};

const Mutation = {
  createChessGame: protectedResolver((jwtPayload) => createChessGame(jwtPayload.id)),
  joinChessGame: protectedResolver((jwtPayload, parent, args) =>
    joinChessGame(jwtPayload.id, args)
  ),
  makeChessGameMove: protectedResolver((jwtPayload, parent, args) =>
    makeChessGameMove(jwtPayload.id, args)
  ),
};

export const chessGameResolver = {
  Query,
  Mutation,
  ChessGame,
};
