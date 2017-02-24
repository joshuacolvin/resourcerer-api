'use strict'

exports.find = function (request, reply) {
  reply('found all')
}

exports.findOne = function (request, reply) {
  reply('found one')
}

exports.create = function (request, reply) {
  const db = request.mongo.db

  db.collection('collections').insertOne(request.payload, (err, result) => {
    if (err) {
      reply(err)
    }
    const document = result.ops[0]
    reply(document)
  })
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

