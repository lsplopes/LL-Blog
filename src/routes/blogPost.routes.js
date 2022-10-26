const express = require('express');
const blogPostMiddleware = require('../middlewares/blogPost.middleware');
const blogPostController = require('../controllers/blogPost.controller');

const router = express.Router();

router.post('/', blogPostMiddleware.validateBlogPost, blogPostController.createBlogPost);

// router.get('/', categoryController.getCategories);

module.exports = router;