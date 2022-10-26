const userService = require('../services/user.service');

const createUser = async (req, res) => {  
  const token = await userService.createUser(req.body);

  return res.status(201).json({ token });
};

const getUsers = async (req, res) => {
  const users = await userService.getUsers();

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (!user) {
    const error = {
      status: 404,
      message: 'User does not exist',
    };
    throw error;
  }
  return res.status(200).json(user);
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
