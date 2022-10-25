const { Category } = require('../models');

const createCategory = async (name) => {
  const id = await Category.create({ name });
  return id;
};

module.exports = {
  createCategory,
};
