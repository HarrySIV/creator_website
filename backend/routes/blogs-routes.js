const express = require('express');
const router = express.Router();

const blogsController = require('../controllers/blogs-controller');

    //get blog from ID
router.get('/:bid', blogsController.getBlogs);

    //update blog from ID
router.patch('/:bid', blogsController.updateBlog);

    //delete blog from ID
router.delete('/:bid', blogsController.deleteBlog);

    //create new blog
router.post('/', blogsController.createBlog);

module.exports = router;
