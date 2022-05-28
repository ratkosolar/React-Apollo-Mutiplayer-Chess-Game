import { Role } from '../user/user.types';
import { Schema } from 'mongoose';

export type JwtPayload = {
  username: string;
  email: string;
  id: Schema.Types.ObjectId;
  role: Role;
};
