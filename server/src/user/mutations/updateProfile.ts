import { User } from '../user.model';
import { IUser } from '../user.types';

type Args = {
  firstName: string;
  lastName: string;
};

type UpdateProfileMutation = (id: string, args: Args) => Promise<IUser | null>;

export const updateProfile: UpdateProfileMutation = async (id, { firstName, lastName }) => {
  return User.findByIdAndUpdate(id, { firstName, lastName }, { new: true });
};
