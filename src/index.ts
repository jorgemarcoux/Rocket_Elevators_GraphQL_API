import 'reflect-metadata';
import { createConnections } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { MySQLresolver } from './resolvers/MySQLresolver';
import { InterventionResolvers } from './resolvers/InterventionResolvers';
const express = require('express');
const ApolloServer = require('apollo-server-express');

(async () => {
  const app = express();

  await createConnections();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [MySQLresolver, InterventionResolvers],
      validate: true,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
  });
})();
