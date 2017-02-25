'use strict'

exports.find = function (request, reply) {
  const db = request.mongo.db
  const ObjectID = request.mongo.ObjectID
  
  db.collection('comments')
    .find({ collection: request.params.collectionId })
    .toArray((err, result) => {
      if (err) {
        reply(err)
      }
      reply(result)
    })
}

exports.create = function (request, reply) {
  reply('create one')
}

exports.updateOne = function (request, reply) {
  reply('update one')
}

exports.deleteOne = function (request, reply) {
  
}