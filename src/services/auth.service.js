const jwtUtil = require('../utils/jwt.util');

const { User } = require('../models');

const validateBody = (params) => {
    if (!params.email || !params.password) {
      const error = {
        status: 400,
        message: 'Some required fields are missing',
      };
      throw error;
    }

    return params;
};

const validateLogin = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
      const error = {
        status: 400,
        message: 'Invalid fields',
      };
      throw error;
    }

    const { password: _, ...userWithoutPassword } = user.dataValues;

    const token = jwtUtil.createToken(userWithoutPassword);

    return token;
};

module.exports = {
  validateBody,
  validateLogin,
};