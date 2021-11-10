import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import mongoose from 'mongoose';

import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';

import { resolvers, typeDefs } from './resolvers';
import { verifyJwtToken } from './auth';

const { PORT = 8080, DATABASE_CONNECTION_STRING = '', JWT_SECRET_KEY = '' } = process.env;

const app = express();
app.use(cors());
app.use(morgan('dev'));

const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const jwtPayload = await verifyJwtToken(req.get('Authorization'), JWT_SECRET_KEY);
    return {
      jwtPayload,
    };
  },
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

server
  .start()
  .then(() => {
    server.applyMiddleware({ app });
    mongoose.connect(DATABASE_CONNECTION_STRING).then(() => {
      console.log('Database connection established');
      httpServer.listen({ port: PORT }, () => {
        console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
      });
    });
  })
  .catch((error) => {
    console.error('Failed to start server', error);
  });
