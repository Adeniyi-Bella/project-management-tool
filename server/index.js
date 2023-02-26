const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
import { ApolloServer, gql } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
// import express from "express";
// import cors from "cors";

const app = express();

// Connect to database
connectDB();

app.use(cors());
app.use(express.json()); // application/json
// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema: schema,
//     graphiql: process.env.NODE_env === 'development',  })
// );

const httpServer = http.createServer(app);
const startApolloServer = async(app, httpServer) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });
}


startApolloServer(app, httpServer);

export default httpServer;
// console.log(24);
// app.listen(port, console.log(`Server running on port ${port}`));