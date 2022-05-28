import { Schema } from 'mongoose';
import { AuthenticationError } from 'apollo-server-express';
import { User } from '../user.model';

type Args = {
  oldPassword: string;
  newPassword: string;
};

type ChangePasswordMutation = (id: Schema.Types.ObjectId, args: Args) => Promise<boolean>;

export const changePassword: ChangePasswordMutation = async (id, { oldPassword, newPassword }) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await user.comparePassword(oldPassword);
  if (!isPasswordValid) {
    throw new AuthenticationError('Invalid password');
  }

  user.password = newPassword;
  await user.save();

  return true;
};
