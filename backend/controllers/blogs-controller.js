const fs = require('fs');

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
    const error = new HttpError(
      'Could not find blog for the provided id.',
      404
    );
    return next(err);
  }

  res.json({ blog: blog.toObject({ getters: true }) });
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
