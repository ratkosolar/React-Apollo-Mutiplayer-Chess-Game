import { protectedResolver } from '../auth';
import { changePassword, deleteUser, login, register, updateProfile } from './mutations';
import { myProfile, user, users } from './queries';
import { Role } from './user.types';

const Query = {
  myProfile: protectedResolver((jwtPayload) => myProfile(jwtPayload.id)),
  user: protectedResolver((jwtPayload, parent, args) => user(args)),
  users: protectedResolver(() => users()),
};

const Mutation = {
  register: (parent, args) => register(args),
  login: (parent, args) => login(args),
  updateProfile: protectedResolver((jwtPayload, parent, args) =>
    updateProfile(jwtPayload.id, args)
  ),
  changePassword: protectedResolver((jwtPayload, parent, args) =>
    changePassword(jwtPayload.id, args)
  ),
  deleteUser: protectedResolver((jwtPayload, parent, args) => deleteUser(args), [Role.ADMIN]),
};

export const userResolver = {
  Query,
  Mutation,
};
