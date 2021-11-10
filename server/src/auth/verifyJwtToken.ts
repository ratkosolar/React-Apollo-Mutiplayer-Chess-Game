import { AuthenticationError } from 'apollo-server-express';
import { JwtPayload, verify } from 'jsonwebtoken';

type VerifyJwtToken = (
  authHeader: string | null | undefined,
  jwtSecretKey: string
) => string | JwtPayload | null;

export const verifyJwtToken: VerifyJwtToken = (authHeader, jwtSecretKey) => {
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    try {
      return verify(token, jwtSecretKey);
    } catch (e) {
      throw new AuthenticationError('Not authenticated');
    }
  }
  return null;
};
