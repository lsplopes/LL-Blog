const express = require('express');
const categoryMiddleware = require('../middlewares/validateCategory.middleware');
const categoryController = require('../controllers/category.controller');

const router = express.Router();

router.post('/', categoryMiddleware.validateName, categoryController.createCategory);

module.exports = router;
