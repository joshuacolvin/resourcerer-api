'use strict'

const Joi = require('joi')

module.exports = {
  title: Joi.string().required(),
  author: Joi.string().required(),
  authorId: Joi.string().required(),
  summary: Joi.string(),
  tags: Joi.array().items(Joi.string()),
  category: Joi.string().required(),
  created: Joi.date().timestamp().default(Date.now()),
  resources: Joi.array().items(Joi.string()),
  hearts: Joi.number().default(0),
  comments: Joi.array().items(Joi.string())
}
