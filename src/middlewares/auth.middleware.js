const jwtUtil = require('../utils/jwt.util');

const validateToken = async (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    const error = {
      status: 401,
      message: 'Token not found',
    };
    throw error;
  }

  const user = jwtUtil.validateToken(authorization);
  req.user = user;

  next();
};

module.exports = {
  validateToken,
};
