import React, { FC } from "react";
import { OperationDefinitionNode } from "graphql";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as ReactApolloProvider,
  ApolloLink,
  split,
  HttpLink,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { onError } from "@apollo/client/link/error";

import { getAuthToken } from "../auth";

const isBrowser = typeof window !== "undefined";

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_GRAPHQL_SERVER}`,
});

const wsLink = isBrowser
  ? new WebSocketLink({
      uri: `${process.env.REACT_APP_GRAPHQL_SERVER_WS}`,
      options: {
        reconnect: true,
        lazy: true,
        connectionParams: () => {
          const token = getAuthToken();
          return {
            Authorization: token ? `Bearer ${token}` : null,
          };
        },
      },
    })
  : null;

const terminatingLink = isBrowser
  ? split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(
          query
        ) as OperationDefinitionNode;
        return kind === "OperationDefinition" && operation === "subscription";
      },
      wsLink as any,
      httpLink
    )
  : httpLink;

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => {
    const token = getAuthToken();

    if (token) {
      headers = {
        ...headers,
        Authorization: token ? `Bearer ${token}` : null,
      };
    }

    return { headers };
  });

  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      console.error("GraphQL error", message);

      if (message === "UNAUTHENTICATED") {
        console.error("Unauthenticated");
        document.location = "/logout";
      }
    });
  }

  if (networkError) {
    console.error("Network error", networkError);
  }
});

const link = ApolloLink.from([authLink, errorLink, terminatingLink]);
const cache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache,
});

export const ApolloProvider: FC = ({ children }) => {
  return <ReactApolloProvider client={client}>{children}</ReactApolloProvider>;
};
