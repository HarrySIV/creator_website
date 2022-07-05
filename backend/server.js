const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const server = express();

mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.d9kcs.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
  .then(() => server.listen(5001))
  .catch((error) => console.log(error));