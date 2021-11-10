import { User } from '../user.model';
import { IUser } from '../user.types';

type UsersQuery = () => Promise<IUser[]>;

export const users: UsersQuery = async () => {
  return User.find().select('-email-role');
};
