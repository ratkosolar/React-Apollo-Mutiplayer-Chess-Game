import { ChessGameOverReason } from '../chess-game.types';
import { ChessGame } from '../chess-game.model';
import { Schema } from 'mongoose';

type Args = {
  filter: {
    playerID?: Schema.Types.ObjectId;
    winnerID?: Schema.Types.ObjectId;
    gameOverReason?: ChessGameOverReason;
  };
};

type ChessGamesCountQuery = (args: Args) => Promise<number>;

export const chessGamesCount: ChessGamesCountQuery = async ({ filter }) => {
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
  return ChessGame.count(filterQuery);
};
