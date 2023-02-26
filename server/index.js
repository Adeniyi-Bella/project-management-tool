const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

const app = express();

// Connect to database
connectDB();

app.use(cors());
app.use(bodyParser.json()); // application/json
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_env === 'development',  })
);
console.log(24);
app.listen(port, console.log(`Server running on port ${port}`));