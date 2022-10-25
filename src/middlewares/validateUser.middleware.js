const Joi = require('joi');
const userService = require('../services/user.service');

const validateUser = async (req, _res, next) => {
  const schema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    const { message } = error;
    const errorOutput = { status: 400, message };
    throw errorOutput;
  }

  const emailTest = await userService.getUserByEmail(req.body.email);
  if (emailTest) {
    const errorOutput = { status: 409, message: 'User already registered' };
    throw errorOutput;
  }

  next();
};

module.exports = {
  validateUser,
};
