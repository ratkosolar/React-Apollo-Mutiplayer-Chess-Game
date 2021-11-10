import { User } from '../user.model';
import { IUser } from '../user.types';

type Args = {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
};

type RegisterMutation = (args: Args) => Promise<IUser>;

export const register: RegisterMutation = async (args) => {
  return User.create(args);
};
