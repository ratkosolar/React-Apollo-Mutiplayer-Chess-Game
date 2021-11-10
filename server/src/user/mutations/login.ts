import 'dotenv/config';
import { User } from '../user.model';
import { AuthenticationError } from 'apollo-server-express';
import { signJwtToken, verifyJwtToken } from '../../auth';
const { JWT_SECRET_KEY = '' } = process.env;

type Args = {
  username: string;
  password: string;
};

type Response = {
  token: string;
};

type LoginMutation = (args: Args) => Promise<Response>;

export const login: LoginMutation = async ({ username, password }) => {
  const user = await User.findByUsernameOrEmail(username);
  if (!user) {
    throw new AuthenticationError('Invalid login credentials');
  }

  const isPasswordValid = user.comparePassword(password);
  if (!isPasswordValid) {
    throw new AuthenticationError('Invalid login credentials');
  }

  const token = signJwtToken(
    { username: user.username, email: user.email, id: user.id, role: user.role },
    JWT_SECRET_KEY,
    '7d'
  );
  return { token };
};
