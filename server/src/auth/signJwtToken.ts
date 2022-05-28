import { sign } from 'jsonwebtoken';
import { JwtPayload } from './auth.types';

type SignJwtToken = (payload: JwtPayload, jwtSecretKey: string, expiresIn: string) => string;

export const signJwtToken: SignJwtToken = (payload, jwtSecretKey, expiresIn) => {
  return sign(payload, jwtSecretKey, { expiresIn });
};
