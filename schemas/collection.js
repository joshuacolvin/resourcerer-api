'use strict'

const Joi = require('joi')

const resource = Joi.object().keys({
  title: Joi.string().required(),
  tags: Joi.array().items(Joi.string()),
  date: Joi.date().timestamp().required(),
  summary: Joi.string(),
  category: Joi.string().required(),
  url: Joi.string().required()
})

module.exports = {
  title: Joi.string().required(),
  author: Joi.string().required(),
  summary: Joi.string(),
  tags: Joi.array().items(Joi.string()),
  category: Joi.string().required(),
  date: Joi.date().timestamp().required(),
  resources: Joi.array().items(resource)
}