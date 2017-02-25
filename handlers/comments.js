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
  const db = request.mongo.db

  db.collection('comments').insertOne(request.payload, (err, result) => {
    if (err) {
      reply(err)
    }
    const document = result.ops[0]
    reply(document)
  })
}
