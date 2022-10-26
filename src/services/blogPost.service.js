const { BlogPost } = require('../models');

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

module.exports = {
  createBlogPost,
};
