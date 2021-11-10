import { sign } from 'jsonwebtoken';
import { Role } from '../user/user.types';

type SignJwtToken = (
  payload: {
    id: string;
    username: string;
    email: string;
    role: Role;
  },
  jwtSecretKey: string,
  expiresIn: string
) => string;

export const signJwtToken: SignJwtToken = (payload, jwtSecretKey, expiresIn) => {
  return sign(payload, jwtSecretKey, { expiresIn });
};
