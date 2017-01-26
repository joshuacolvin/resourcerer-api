'use strict'

exports.find = function (request, reply) {
  reply('found all')
}

exports.findOne = function (request, reply) {
  reply('found one')
}

exports.create = function (request, reply) {
  reply('created')
}

exports.createOne = function (request, reply) {
  reply('create one')
}

exports.updateOne = function (request, reply) {
  reply('update one')
}

exports.deleteOne = function (request, reply) {
  reply('delete one')
}

exports.heart = function (request, reply) {
  reply('heart')
}

