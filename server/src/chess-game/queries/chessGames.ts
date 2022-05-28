import { ChessGameOverReason, IChessGame } from '../chess-game.types';
import { ChessGame } from '../chess-game.model';
import { Schema } from 'mongoose';

type Args = {
  filter: {
    playerID?: Schema.Types.ObjectId;
    winnerID?: Schema.Types.ObjectId;
    gameOverReason?: ChessGameOverReason;
  };
  limit: number;
  offset: number;
};

type ChessGamesQuery = (args: Args) => Promise<IChessGame[]>;

export const chessGames: ChessGamesQuery = async ({ filter, limit = 0, offset = 0 }) => {
  const filterQuery = filter
    ? {
        $and: [
          ...(filter.playerID
            ? [
                {
                  $or: [{ playerOneID: filter.playerID }, { playerTwoID: filter.playerID }],
                },
              ]
            : []),
          ...(filter.winnerID ? [{ winnerID: filter.winnerID }] : []),
          ...(filter.gameOverReason ? [{ gameOverReason: filter.gameOverReason }] : []),
        ],
      }
    : {};
  return ChessGame.find(filterQuery).skip(offset).limit(limit);
};
