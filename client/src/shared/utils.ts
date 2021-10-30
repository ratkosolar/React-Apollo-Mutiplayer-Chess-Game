import React from "react";

export const isUndefined = (x: any): x is undefined => typeof x === "undefined";
export const isElement = (x: any): x is React.ReactNode =>
  React.isValidElement(x);
export const isNumber = (x: any): x is number =>
  typeof x === "number" && !Number.isNaN(x);
export const isString = (x: any): x is string => typeof x === "string";
export const isBoolean = (x: any): x is boolean => typeof x === "boolean";
export const isArray = (x: any): x is [] => Array.isArray(x);
export const isFunction = (x: any): x is Function => typeof x === "function";
export const isHTMLElement = (x: any): x is HTMLElement =>
  x instanceof HTMLElement;

export const isValidEmail = (x: any): boolean => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(x).toLowerCase());
};

export const capitalize = (x: string): string => {
  return x.charAt(0).toUpperCase() + x.slice(1);
};
