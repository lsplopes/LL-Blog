const blogPostService = require('../services/blogPost.service');
const postCategoryService = require('../services/postCategory.service');

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const payload = {
    title,
    content,
    userId: req.user.id,    
  };

  const newBlogPost = await blogPostService.createBlogPost(payload);

  await postCategoryService.createAssociation(newBlogPost.id, categoryIds);

  res.status(201).json(newBlogPost);
};

const getPosts = async (_req, res) => {
  const result = await blogPostService.getPosts();
  res.status(200).json(result);
};

const getPostsById = async (req, res) => {
  const { id } = req.params;
  console.log('entrou aqui');
  const result = await blogPostService.getPostsById(id);
  if (!result) {
    const errorOutput = {
      status: 404,
      message: 'Post does not exist',
    };
    throw errorOutput;
  }
  res.status(200).json(result);
};

module.exports = {
  createBlogPost,
  getPosts,
  getPostsById,
};
