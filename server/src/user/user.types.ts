import { Model, Document } from 'mongoose';

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

export interface IUserDocument extends IUser, Document {
  encryptPassword: (password: string) => string;
  comparePassword: (password: string) => boolean;
}

export interface IUserModel extends Model<IUser, IUserDocument, IUserDocument> {
  findByUsernameOrEmail: (usernameOrEmail: string) => Promise<IUserDocument | null>;
}
