'use strict'

const Joi = require('joi')

module.exports = Joi.object().keys({
  title: Joi.string().required(),
  tags: Joi.array().items(Joi.string()),
  created: Joi.date().timestamp().default(Date.now()),
  summary: Joi.string(),
  category: Joi.string().required(),
  url: Joi.string().required()
})
