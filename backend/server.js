require('dotenv').config();
const fs = require('fs');
const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.json());

server.use('/uploads/images', express.static(path.join('uploads', 'images')));

server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

//server.use('./api/blogs');

server.use((req, res, next) => {
  const error = new HttpError('Could not find this route', 404);
  throw error;
});

server.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

mongoose
  .connect(
    //`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.d9kcs.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    `mongodb://${process.env.DB_USER}:${encodeURIComponent(
      process.env.DB_PASSWORD
    )}@127.0.0.1:5001/rjweb?retryWrites=true&w=majority`
  )
  .then(() => {
    server.listen(5000);
    console.log('listening...');
  })
  .catch((err) => {
    console.log(err.message);
  });
