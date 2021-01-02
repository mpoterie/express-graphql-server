const express = require('express');
const schema = require('./schema/schema');
const {
  graphqlHTTP,
} = require('express-graphql');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://mathieupoterie:ZDqaovvTbcx85Ubz@gql-ninja.hfyst.mongodb.net/GQL-NINJA?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
