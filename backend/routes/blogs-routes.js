const express = require('express');
const blogsController = require('../controllers/blogs-controller');
const router = express.Router();

//get blogs
router.get('/', blogsController.getBlogs);

//get blog by ID
router.get('/:bid', blogsController.getABlog);

//update blog from ID
router.patch('/:bid', blogsController.updateBlog);

//delete blog from ID
router.delete('/:bid', blogsController.deleteBlog);

//create new blog
router.post('/', blogsController.createBlog);

module.exports = router;
