const Joi = require('joi');

const subspriptionSchema = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  address: Joi.string().required(),
  numberAddress: Joi.string().pattern(/^[\d]+$/, "only numbers").required(),
  addOnAddress: Joi.string(),
  city: Joi.string().required(),
  uf: Joi.string().length(2).required(),
  postalCode: Joi.string().length(9).pattern(/^\d{5}-\d{3}$/, 'validate CEP to 99999-99').required(),
  gender: Joi.string().valid('M','F','NI').required(),
  accommodationId: Joi.number().integer().required(),
  phone: Joi.string().pattern(/^(\(\d{2}\)\s)(\d{4,5}\-\d{4})$/, 'validate phone to (99) 99999-9999').required(),
  admissionCost: Joi.string().required(),
  id: Joi.number().integer(),
  userId: Joi.number().integer(),
  cpf: Joi.string(),
})

module.exports = subspriptionSchema;
