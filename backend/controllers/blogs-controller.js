const fs = require('fs');
const { default: mongoose } = require('mongoose');

const Blog = require('../models/blog')

const HttpError = require;

const getBlogs = async (req, res, next) => {
  const blogID = req.params.bid;

  let blog;
  try {
    blog = await blog.findById(blogID);
  } catch (error) {
    const err = new HttpError(
      'Something went wrong, could not find a blog',
      500
    );
    return next(err);
  }
  if (!blog) {
    const err = new HttpError('Could not find blog for the provided id.', 404);
    return next(err);
  }

  res.json({ blog: blog.toObject({ getters: true }) });
};

const createBlog = async (req, res, next) => {
  const { title, description } = req.body;

  const createdBlog = new Blog({
    title,
    description,
  });

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdBlog.save({ session: sess });
    await sess.commitTransaction();
  } catch (error) {
    const err = new HttpError('Creating blog failed, please try again', 500);
    return next(err)
  }
  res.status(201).json({ blog: createdBlog });
};

const updateBlog = async (req, res, next) => {
  const { title, description } = req.body;
  const blogID = req.params.bid;

  let blog;

  try {
    blog = await blog.findById(blogID);
  } catch (error) {
    const err = new HttpError(
      'Something went wrong, place was not updated.',
      500
    );
    return next(err);
  }

  blog.title = title;
  blog.description = description;

  try {
    await blog.save();
  } catch (error) {
    const err = new HttpError(
      'Something went wrong, place was not updated.',
      500
    );
    return next(err);
  }
  res.status(200).json({ blog: blog.toObject({ getters: true }) });
};

const deleteBlog = (req, res, next) => {
  const blogID = req.params.bid;

  let blog;
  try {
    blog = await Blog.findById(blogID).populate();
  } catch (error) {
    const err = new HttpError(
      'Something went wrong, could not delete place',
      500
    );
    return next(err);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await blog.remove({ session: sess })
    await blog.save({ session: sess })
    await sess.commitTransaction();
  } catch (error) {
    const err = new HttpError(
      'Something went wrong, could not delete place.',
      500
    )
    return next(err)
  }
  res.status(200).json({ message: 'Deleted Blog' })
}

exports.getBlogs = getBlogs;
exports.createBlog = createBlog;
exports.updateBlog = updateBlog;
exports.deleteBlog = deleteBlog;