import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import mongoose from 'mongoose';

import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';

import resolvers from './resolvers';
import typeDefs from './type-defs';

const { PORT = 8080, DATABASE_CONNECTION_STRING = '' } = process.env;

const app = express();
app.use(cors());
app.use(morgan('dev'));

const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

server
  .start()
  .then(() => {
    server.applyMiddleware({ app });
    mongoose.connect(DATABASE_CONNECTION_STRING, () => {
      httpServer.listen({ port: PORT }, () => {
        console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
      });
    });
  })
  .catch((error) => {
    console.error('Failed to start server', error);
  });
