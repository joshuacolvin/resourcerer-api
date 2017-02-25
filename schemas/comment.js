'use strict'

const Joi = require('joi')

module.exports = Joi.object().keys({
  author: Joi.string().required(),
  authorId: Joi.string().required(),
  created: Joi.date().timestamp().default(Date.now()),
  text: Joi.string().required()
})
