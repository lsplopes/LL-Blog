const Joi = require('joi');
const categoryService = require('../services/category.service');

const validateBlogPost = async (req, _res, next) => {
  const contentSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
  });

  const { error } = contentSchema.validate(req.body);
  if (error) {
    const errorOutput = { status: 400, message: 'Some required fields are missing' };
    throw errorOutput;
  }

  const { categoryIds } = req.body;
  const categoryTest = await categoryService.getCategoriesArray(categoryIds);
  if (categoryIds.length !== categoryTest.length) {
    const errorOutput = { status: 400, message: 'one or more "categoryIds" not found' };
    throw errorOutput;
  }

  next();
};

const validateUpdatePost = async (req, _res, next) => {
  const contentSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
  });

  const { error } = contentSchema.validate(req.body);
  
  if (error) {
    const errorOutput = { status: 400, message: 'Some required fields are missing' };
    throw errorOutput;
  }

  next();
};

module.exports = {
  validateBlogPost,
  validateUpdatePost,
};