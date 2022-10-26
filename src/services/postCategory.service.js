const { PostCategory } = require('../models');

const createAssociation = async (postId, categoryArray) => {
  await categoryArray.forEach((categoryId) => {
    PostCategory.create({ postId, categoryId });
  });
};

module.exports = {
  createAssociation,
};
