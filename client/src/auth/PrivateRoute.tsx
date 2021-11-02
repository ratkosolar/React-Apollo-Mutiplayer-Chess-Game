import React, { ComponentType, FC } from "react";
import { navigate } from "gatsby";
import { isAuthenticated } from "./auth";
import { RouteComponentProps } from "@reach/router";

type Props = {
  component: ComponentType;
} & RouteComponentProps;

export const PrivateRoute: FC<Props> = ({
  component: Component,
  location,
  ...rest
}) => {
  if (!isAuthenticated() && location?.pathname !== `/app/login`) {
    navigate("/app/login");
    return null;
  }
  return <Component {...rest} />;
};
