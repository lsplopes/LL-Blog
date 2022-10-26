const { Category } = require('../models');

const createCategory = async (name) => {
  const id = await Category.create({ name });
  return id;
};

const getCategories = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = {
  createCategory,
  getCategories,
};
