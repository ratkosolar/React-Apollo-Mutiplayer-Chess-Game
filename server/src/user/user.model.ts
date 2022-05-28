import { model, Schema } from 'mongoose';
import { compareSync, hashSync } from 'bcrypt';
import isEmail from 'validator/lib/isEmail';
import { IUser, IUserMethods, UserModel, Role } from './user.types';

const schema = new Schema<IUser, UserModel, IUserMethods>(
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

schema.statics.findByUsernameOrEmail = async function findByUsernameOrEmail(usernameOrEmail) {
  return this.findOne({
    $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
  });
};

schema.methods.encryptPassword = function encryptPassword(password) {
  const saltRounds = 10;
  return hashSync(password, saltRounds);
};

schema.methods.comparePassword = function comparePassword(password) {
  return compareSync(password, this.password);
};

schema.pre('save', async function preSave() {
  this.password = this.encryptPassword(this.password);
});

export const User = model<IUser, UserModel>('User', schema);
