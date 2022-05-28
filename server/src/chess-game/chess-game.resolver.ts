import { protectResolver } from '../auth';
import { createChessGame, joinChessGame, makeChessGameMove } from './mutations';
import { chessGames, chessGamesCount, chessGame } from './queries';
import { user } from '../user/queries';
import { Resolver } from '../types';

const ChessGame = {
  playerOne: (parent) => user({ id: parent.playerOneID }),
  playerTwo: (parent) => user({ id: parent.playerTwoID }),
  winner: (parent) => user({ id: parent.winnerID }),
};

const Query = {
  chessGames: protectResolver((jwtPayload, parent, args) => chessGames(args)),
  chessGamesCount: protectResolver((jwtPayload, parent, args) => chessGamesCount(args)),
  chessGame: protectResolver((jwtPayload, parent, args) => chessGame(args)),
};

const Mutation = {
  createChessGame: protectResolver((jwtPayload, parent, args) => createChessGame(jwtPayload.id)),
  joinChessGame: protectResolver((jwtPayload, parent, args) => joinChessGame(jwtPayload.id, args)),
  makeChessGameMove: protectResolver((jwtPayload, parent, args) =>
    makeChessGameMove(jwtPayload.id, args)
  ),
};

export const chessGameResolver: Resolver<any, any, any, any> = {
  Query,
  Mutation,
  // @ts-ignore
  ChessGame,
};
