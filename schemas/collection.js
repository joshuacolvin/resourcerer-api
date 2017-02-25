'use strict'

const Joi = require('joi')

const resource = require('./resource')

module.exports = {
  title: Joi.string().required(),
  author: Joi.string().required(),
  summary: Joi.string(),
  tags: Joi.array().items(Joi.string()),
  category: Joi.string().required(),
  date: Joi.date().timestamp().required(),
  resources: Joi.array().items(resource),
  hearts: Joi.number().required(),
  comments: Joi.array().items(comment)
}
