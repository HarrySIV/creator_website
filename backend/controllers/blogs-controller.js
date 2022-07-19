const fs = require('fs');
const { default: mongoose } = require('mongoose');

const Blog = require('../models/blog');

const HttpError = require;

const getBlogs = async (req, res, next) => {
  // get ID of blog from url
  const blogID = req.params.bid;

  //find blog based on its ID, throw error if no blog was found
  let blogs;
  try {
    blogs = await Blog.findById(blogID);
  } catch (error) {
    const err = new HttpError('Something went wrong, could not find blog', 500);
    return next(err);
  }
  if (!blogs) {
    const err = new HttpError('Could not find blog for the provided id.', 404);
    return next(err);
  }

  //return blogs found based on ID
  res.json({ blogs: blogs.map((blog) => blog.toObject({ getters: true })) });
};

const createBlog = async (req, res, next) => {
  //create blog based on Blog model
  const { title, description } = req.body;

  const createdBlog = new Blog({
    title,
    description,
  });

  //add blog to database
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdBlog.save({ session: sess });
    await sess.commitTransaction();
  } catch (error) {
    const err = new HttpError('Creating blog failed, please try again', 500);
    return next(err);
  }
  //return blog status update
  res.status(201).json({ blog: createdBlog });
};

const updateBlog = async (req, res, next) => {
  //update exisiting blog in database
  const { title, description } = req.body;
  const blogID = req.params.bid;

  //find existing blog to be updated
  let blog;
  try {
    blog = await blog.findById(blogID);
  } catch (error) {
    const err = new HttpError(
      'Something went wrong, blog was not updated.',
      500
    );
    return next(err);
  }

  //new title and text replaces old
  blog.title = title;
  blog.description = description;

  //save updated blog to database
  try {
    await blog.save();
  } catch (error) {
    const err = new HttpError(
      'Something went wrong, blog was not updated.',
      500
    );
    return next(err);
  }

  //return blog status update
  res.status(200).json({ blog: blog.toObject({ getters: true }) });
};

const deleteBlog = async (req, res, next) => {
  //find blog by ID from url
  const blogID = req.params.bid;

  let blog;
  try {
    blog = await Blog.findById(blogID).populate();
  } catch (error) {
    const err = new HttpError(
      'Something went wrong, could not delete blog',
      500
    );
    return next(err);
  }

  //delete blog from database if found
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await blog.remove({ session: sess });
    await blog.save({ session: sess });
    await sess.commitTransaction();
  } catch (error) {
    const err = new HttpError(
      'Something went wrong, could not delete blog.',
      500
    );
    return next(err);
  }

  //return blog status update
  res.status(200).json({ message: 'Deleted Blog' });
};

exports.getBlogs = getBlogs;
exports.createBlog = createBlog;
exports.updateBlog = updateBlog;
exports.deleteBlog = deleteBlog;
