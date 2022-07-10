const express = require('express');
const router = express.Router();

const blogsController = require('../controllers/blogs-controller');

router.get('/:bid', blogsController.getBlogs);

router.post('/');

router.patch('/:bid');

module.exports = router;
