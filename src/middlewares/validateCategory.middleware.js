const Joi = require('joi');

const validateName = async (req, _res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  const { name } = req.body;
  const { error } = schema.validate({ name });
  if (error) {
    const { message } = error;
    const errorOutput = { status: 400, message };
    throw errorOutput;
  }
  next();
};

module.exports = {
  validateName,
};
