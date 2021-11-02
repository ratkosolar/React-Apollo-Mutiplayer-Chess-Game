import Cookies from "js-cookie";

const AUTH_TOKEN_COOKIE_NAME = "AUTH_TOKEN";

export const isAuthenticated = (): boolean => {
  return !!Cookies.get(AUTH_TOKEN_COOKIE_NAME);
};

export const getAuthToken = (): string => {
  return Cookies.get(AUTH_TOKEN_COOKIE_NAME);
};

export const authenticate = (token: string): void => {
  Cookies.set(AUTH_TOKEN_COOKIE_NAME, token);
};

export const clear = (): void => {
  Cookies.remove(AUTH_TOKEN_COOKIE_NAME);
};
