const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');

const login = async (req, res, next) => {
  const { email, password } = req.body;

      //check authorization credentials from database
  let creator;
  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, creator.password);
  } catch (error) {
    const err = new HttpError('Invalid email/password', 500);
    return next(err);
  }
};
