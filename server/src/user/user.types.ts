import { Model, HydratedDocument } from 'mongoose';

export enum Role {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
}

export interface IUser {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
}

export interface IUserMethods {
  encryptPassword(password: string): string;
  comparePassword(password: string): boolean;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
  findByUsernameOrEmail(
    usernameOrEmail: string
  ): Promise<HydratedDocument<IUser, IUserMethods> | null>;
}
