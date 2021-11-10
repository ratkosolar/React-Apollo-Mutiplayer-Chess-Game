import { model, Schema } from 'mongoose';
import { compareSync, hashSync } from 'bcrypt';
import isEmail from 'validator/lib/isEmail';
import { IUser, IUserDocument, IUserModel, Role } from './user.types';

const userSchema = new Schema<IUser, IUserModel, IUser>(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      minlength: 6,
      maxlength: 128,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      minlength: 3,
      maxlength: 320,
      validate: [isEmail, 'Email is not valid'],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 128,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    role: {
      type: String,
      enum: Role,
      default: Role.CUSTOMER,
    },
  },
  { autoCreate: true }
);

userSchema.statics.findByUsernameOrEmail = async function findByUsernameOrEmail(
  usernameOrEmail: string
): Promise<IUserDocument | null> {
  return this.findOne({
    $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
  });
};

userSchema.methods.encryptPassword = function encryptPassword(password: string): string {
  const saltRounds = 10;
  return hashSync(password, saltRounds);
};

userSchema.methods.comparePassword = function comparePassword(password: string): boolean {
  return compareSync(password, this.password);
};

userSchema.pre<IUserDocument>('save', async function preSave() {
  this.password = this.encryptPassword(this.password);
});

export const User = model<IUserDocument, IUserModel>('User', userSchema);
