const express = require('express');
const router = express.Router();

const blogsController = require('../controllers/blogs-controller');

router.get('/:bid', blogsController.getBlogs);

router.patch('/:bid', blogsController.updateBlog);

router.delete('/:bid', blogsController.deleteBlog);

router.post('/', blogsController.createBlog);

module.exports = router;
