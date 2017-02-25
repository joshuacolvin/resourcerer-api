'use strict'

const Joi = require('joi')

module.exports = {
  title: Joi.string().required(),
  author: Joi.string().required(),
  authorId: Joi.string().required(),
  summary: Joi.string(),
  tags: Joi.array().items(Joi.string()),
  category: Joi.string().required(),
  date: Joi.date().timestamp().required(),
  resources: Joi.array().items(Joi.string()),
  hearts: Joi.number().required(),
  comments: Joi.array().items(Joi.string())
}
