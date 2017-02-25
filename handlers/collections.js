'use strict'

exports.find = function (request, reply) {
  const db = request.mongo.db

  db.collection('collections').find().toArray((err, result) => {
    if (err) {
      reply(err)
    }
    reply(result)
  })
}

exports.findOne = function (request, reply) {
  const db = request.mongo.db
  const ObjectID = request.mongo.ObjectID
  
  db.collection('collections')
    .findOne({ _id: new ObjectID(request.params.collectionId) }, (err, result) => {
      if (err) {
        reply(err)
      }
      reply(result)
    })
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

