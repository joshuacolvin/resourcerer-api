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

exports.updateOne = function (request, reply) {
  const db = request.mongo.db
  const ObjectID = request.mongo.ObjectID

  db.collection('collections')
    .findOneAndReplace({
      _id: new ObjectID(request.params.collectionId)
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

  db.collection('collections')
    .findOneAndDelete({
      _id: new ObjectID(request.params.collectionId)
    }, (err, result) => {
      if (err) {
        reply(err)
      }
      reply(result)
    })
}

exports.heart = function (request, reply) {
  const db = request.mongo.db
  const ObjectID = request.mongo.ObjectID

  db.collection('collections')
    .findOneAndUpdate({
    _id: new ObjectID(request.params.collectionId)},
      { $inc: { hearts: 1 } },
      (err, result) => {
        if (err) {
          reply(err)
        }
        reply(result)
      })
}
