const express = require('express');
const router = express.Router();

const blogsController = require('../controllers/blogs-controller');

router.get('/:bid', blogsController.getBlogs);

router.post('/', (req, res, next) => {
  res.send('Hello');
});

router.patch('/:bid', (req, res, next) => {
  blogsController.updateBlog;
});

module.exports = router;
