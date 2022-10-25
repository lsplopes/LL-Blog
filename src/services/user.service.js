const { User } = require('../models');
const jwtUtil = require('../utils/jwt.util');

const createUser = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });

  const dataValues = { displayName, email, image };
  const token = jwtUtil.createToken(dataValues);

  return token;
};

const getUserByEmail = async (email) => User.findOne({ where: { email } });

const getUsers = async () => User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });

const getUserById = async (id) => User
  .findByPk(id, { attributes: ['id', 'displayName', 'email', 'image'] });

module.exports = {
  createUser,
  getUserByEmail,
  getUsers,
  getUserById,
};
