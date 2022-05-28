import { User } from '../user.model';
import { IUser } from '../user.types';

type Args = {
  id: string;
};

type UserQuery = (args: Args) => Promise<IUser | null>;

export const user: UserQuery = async ({ id }) => {
  return id ? User.findById(id).select('-email') : null;
};
