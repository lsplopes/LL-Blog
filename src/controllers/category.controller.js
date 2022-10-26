const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const data = await categoryService.createCategory(name);
  return res.status(201).json(data);
};

const getCategories = async (_req, res) => {
  const data = await categoryService.getCategories();
  return res.status(200).json(data);
};

module.exports = {
  createCategory,
  getCategories,
};
