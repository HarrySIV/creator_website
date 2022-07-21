const path = require('path');
require('dotenv').config();

const dbURL = process.env.DB_URL;
const port = 5000;

const fs = require('fs');
//const HttpError = require('./models/http-error');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const blogsRoutes = require('./routes/blogs-routes');

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

server.get('/api/blogs', blogsRoutes);

// server.use((req, res, next) => {
//   const error = new HttpError('Could not find this route', 404);
//   throw error;
// });

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
  .connect(dbURL)
  .then(() => {
    server.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
