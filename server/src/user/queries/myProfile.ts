import { User } from '../user.model';
import { IUser } from '../user.types';

type MyProfileQuery = (id: string) => Promise<IUser | null>;

export const myProfile: MyProfileQuery = async (id) => {
  return User.findById(id);
};
