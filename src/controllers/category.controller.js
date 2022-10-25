const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const data = await categoryService.createCategory(name);
  res.status(201).json(data);
};

module.exports = {
  createCategory,
};
