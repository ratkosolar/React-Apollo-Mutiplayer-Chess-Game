type FormControlState = {
  value: string;
  valid: boolean;
  touched: boolean;
};

export type LoginFormState = {
  username: FormControlState;
  password: FormControlState;
};
