import { ForbiddenError } from 'apollo-server-express';
import { Role } from '../user/user.types';
import { JwtPayload } from './auth.types';

type ProtectedResolver = (
  resolverFn: (jwtPayload: JwtPayload, parent: any, args: any, context: any) => any,
  allowedRoles?: Role[]
) => (
  parent: any,
  args: any,
  context: any
) => (jwtPayload: JwtPayload, parent: any, args: any, context: any) => any;

export const protectedResolver: ProtectedResolver = (resolverFn, allowedRoles) => {
  return (parent, args, context) => {
    const { jwtPayload } = context;

    if (!jwtPayload) {
      return new ForbiddenError('Not authenticated.');
    }

    if (allowedRoles && !allowedRoles?.includes(jwtPayload.role)) {
      return new ForbiddenError('Not allowed to do this action.');
    }

    return resolverFn(jwtPayload, parent, args, context);
  };
};
