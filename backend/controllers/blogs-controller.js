const fs = require('fs')

const HttpError = require

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
    return next(error);
  }
  if (!blog) {
    const error = new HttpError(
      'Could not find blog for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ blog: blog.toObject({ getters: true }) });
};
