import { protectResolver } from '../auth';
import { changePassword, deleteUser, login, register, updateProfile } from './mutations';
import { myProfile, user, users } from './queries';
import { Resolver } from '../types';
import { Role } from './user.types';

const Query = {
  myProfile: protectResolver((jwtPayload, parent, args, context) => myProfile(jwtPayload.id)),
  user: protectResolver((jwtPayload, parent, args) => user(args)),
  users: protectResolver(() => users()),
};

const Mutation = {
  register: (parent, args) => register(args),
  login: (parent, args) => login(args),
  updateProfile: protectResolver((jwtPayload, parent, args) => updateProfile(jwtPayload.id, args)),
  changePassword: protectResolver((jwtPayload, parent, args) =>
    changePassword(jwtPayload.id, args)
  ),
  deleteUser: protectResolver((jwtPayload, parent, args) => deleteUser(args), [Role.ADMIN]),
};

export const userResolver: Resolver<any, any, any, any> = {
  Query,
  Mutation,
};
