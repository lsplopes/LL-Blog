const { BlogPost, User, Category } = require('../models');

const createBlogPost = async ({ title, content, userId }) => {
  const currTime = Date.now();
  const result = await BlogPost.create({
    title,
    content,
    userId,
    published: currTime,
    updated: currTime,
  });
  return result;
};

const getPosts = async () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', attributes: ['id', 'name'], through: { attributes: [] } },
  ],
});

module.exports = {
  createBlogPost,
  getPosts,
};
