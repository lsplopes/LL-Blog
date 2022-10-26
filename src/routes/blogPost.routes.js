const express = require('express');
const blogPostMiddleware = require('../middlewares/blogPost.middleware');
const blogPostController = require('../controllers/blogPost.controller');

const router = express.Router();

router.post('/', blogPostMiddleware.validateBlogPost, blogPostController.createBlogPost);

router.get('/:id', blogPostController.getPostsById);

router.get('/', blogPostController.getPosts);

module.exports = router;