'use strict'

const Joi = require('joi')

module.exports = Joi.object().keys({
  author: Joi.string().required(),
  date: Joi.date().timestamp().required(),
  text: Joi.string().required()
})
