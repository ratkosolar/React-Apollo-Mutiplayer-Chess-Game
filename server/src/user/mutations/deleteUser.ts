import { User } from '../user.model';

type Args = {
  id: string;
};

type DeleteUserMutation = (args: Args) => Promise<boolean>;

export const deleteUser: DeleteUserMutation = async ({ id }) => {
  const user = await User.findById(id);

  if (user) {
    await user.remove();
    return true;
  }

  return false;
};
