import React, { FC, useEffect, useState } from "react";
import { navigate, RouteComponentProps } from "@reach/router";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";

import { Flex, Typography } from "../../shared";
import { Button } from "../../shared/Button";
import { LoginFormState } from "./Login.types";
import { authenticate } from "../../auth";

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

const StyledForm = styled.form`
  max-width: ${(p) => p.theme.unit(115)};
  margin: ${(p) => p.theme.unit(5)} auto;
`;

const StyledInput = styled.input<{ $invalid: boolean }>`
  width: 100%;
  display: block;
  font-size: 1rem;
  padding: 12px 10px;
  border: 1px solid #ddd;
  transition: border 0.2s, box-shadow 0.2s;
  ${(p) => (p.$invalid ? "border-color: red;" : "")}

  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.colors.secondary.default};
    box-shadow: 0 0 8px ${(p) => p.theme.colors.secondary.default};
    ${(p) => (p.$invalid ? "box-shadow: 0 0 8px rgba(255,0,0,0.5);" : "")}
  }
`;

export const Login: FC<RouteComponentProps> = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);
  const [{ username, password }, setFormState] = useState<LoginFormState>({
    username: {
      value: "",
      valid: false,
      touched: false,
    },
    password: {
      value: "",
      valid: false,
      touched: false,
    },
  });

  useEffect(() => {
    if (data && data.login?.token) {
      authenticate(data.login.token);
      navigate("/app");
    }
  }, [data]);

  const isFormControlValid = (name: string, value: string): boolean => {
    switch (name) {
      case "username":
        return value.length !== 0;
      case "password":
        return value.length >= 7 && value.length <= 42;
      default:
        return true;
    }
  };

  const markFormControlAsTouched = (name: string): void => {
    setFormState((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        touched: true,
      },
    }));
  };

  const updateFormControlValue = (name: string, value: string): void => {
    setFormState((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        valid: isFormControlValid(name, value),
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login({
      variables: { username: username.value, password: password.value },
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Flex container direction="column" gutter={2}>
        <Flex item>
          <Typography type="h2" as="h2">
            Login
          </Typography>
        </Flex>
        <Flex item>
          <StyledInput
            type="text"
            placeholder="Username or email"
            value={username.value}
            onChange={(e) => updateFormControlValue("username", e.target.value)}
            onBlur={() => markFormControlAsTouched("username")}
            $invalid={username.touched && !username.valid}
          />
        </Flex>
        <Flex item>
          <StyledInput
            type="password"
            placeholder="Password"
            value={password.value}
            onChange={(e) => updateFormControlValue("password", e.target.value)}
            onBlur={() => markFormControlAsTouched("password")}
            $invalid={password.touched && !password.valid}
          />
        </Flex>
        <Flex item>
          <Button
            variant="primary"
            type="submit"
            size="lg"
            disabled={!username.valid || !password.valid}
            fullWidth
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </StyledForm>
  );
};
