'use strict'

exports.findOne = function (request, reply) {
  const db = request.mongo.db
  const ObjectID = request.mongo.ObjectID
  
  db.collection('profiles')
    .findOne({ _id: new ObjectID(request.params.profileId) }, (err, result) => {
      if (err) {
        reply(err)
      }
      reply(result)
    })
}

exports.create = function (request, reply) {
  const db = request.mongo.db

  db.collection('profiles').insertOne(request.payload, (err, result) => {
    if (err) {
      reply(err)
    }
    const document = result.ops[0]
    reply(document)
  })
}

exports.update = function (request, reply) {
  const db = request.mongo.db
  const ObjectID = request.mongo.ObjectID

  db.collection('profiles')
    .findOneAndReplace({ 
      _id: new ObjectID(request.params.profileId) 
    }, request.payload, (err, result) => {
      if (err) {
        reply(err)
      }
      reply(result)
    })
}
