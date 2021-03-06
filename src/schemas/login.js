const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
  email: Joi.string().trim().email().required(),
  password: Joi.string().trim().min(3).max(15).required(),
});

module.exports = schema;
