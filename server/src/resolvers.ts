import { default as commonTypeDefs } from './common.gql';
import { userResolver, userTypeDefs } from './user';
import { chessGameResolver, chessGameTypeDefs } from './chess-game';

export const typeDefs = [commonTypeDefs, userTypeDefs, chessGameTypeDefs];
export const resolvers = [userResolver, chessGameResolver];
