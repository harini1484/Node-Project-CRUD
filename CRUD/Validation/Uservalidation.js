const joi = require('joi');

const adduserschema = joi.object({
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
  phone: joi.number().min(10).required()
});

const registerschema = joi.object({
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
  phone: joi.number().min(10).required(),
  password: joi.string()
    .min(8)
    .max(32)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/)
    .required()
});

const loginschema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
});

module.exports = { adduserschema, registerschema, loginschema };