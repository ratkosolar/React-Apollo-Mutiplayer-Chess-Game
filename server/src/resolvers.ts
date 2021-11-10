import { userResolver, userTypeDefs } from './user/user.resolver';

export const typeDefs = [userTypeDefs];
export const resolvers = [userResolver];
