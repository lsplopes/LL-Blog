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

const getPostsById = async (id) => BlogPost.findByPk(id, {
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', attributes: ['id', 'name'], through: { attributes: [] } },
  ],
});

const updatePost = async (id, title, content) => {
  const [qtdUpdated] = await BlogPost.update(
    { title, content },
    { where: { id } },
  );
  return qtdUpdated > 0;
};

module.exports = {
  createBlogPost,
  getPosts,
  getPostsById,
  updatePost,
};
