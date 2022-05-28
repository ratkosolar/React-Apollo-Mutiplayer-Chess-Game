import { Schema } from 'mongoose';
import { User } from '../user.model';
import { IUser } from '../user.types';

type MyProfileQuery = (id: Schema.Types.ObjectId) => Promise<IUser | null>;

export const myProfile: MyProfileQuery = async (id) => {
  return User.findById(id);
};
