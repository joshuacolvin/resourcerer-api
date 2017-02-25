'use strict'

exports.find = function (request, reply) {
  const db = request.mongo.db
  const ObjectID = request.mongo.ObjectID
  
  db.collection('resources')
    .find({ collection: request.params.collectionId })
    .toArray((err, result) => {
      if (err) {
        reply(err)
      }
      reply(result)
    })
}

exports.createOne = function (request, reply) {
  const db = request.mongo.db

  db.collection('resources').insertOne(request.payload, (err, result) => {
    if (err) {
      reply(err)
    }
    const document = result.ops[0]
    reply(document)
  })
}

exports.updateOne = function (request, reply) {
  const db = request.mongo.db
  const ObjectID = request.mongo.ObjectID

  db.collection('resources')
    .findOneAndReplace({ 
      _id: new ObjectID(request.params.resourceId)
    }, request.payload, (err, result) => {
      if (err) {
        reply(err)
      }
      reply(result)
    })
}

exports.deleteOne = function (request, reply) {
  const db = request.mongo.db
  const ObjectID = request.mongo.ObjectID

  db.collection('resources')
    .findOneAndDelete({ 
      _id: new ObjectID(request.params.resourceId)
    }, (err, result) => {
      if (err) {
        reply(err)
      }
      reply(result)
    })
}
