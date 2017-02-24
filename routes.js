'use strict'

const Collections = require('./handlers/collections')
const Profiles = require('./handlers/profiles')
const collectionSchema = require('./schemas/collection')

module.exports = [
  {
    method: 'GET',
    path: '/api/collections',
    handler: Collections.find
  },
  {
    method: 'POST',
    path: '/api/collections',
    handler: Collections.create,
    config: {
      validate: {
        payload: collectionSchema
      }
    }
  },
  {
    method: 'GET',
    path: '/api/collections/{id}',
    handler: Collections.findOne
  },
  {
    method: 'POST',
    path: '/api/collections/{id}',
    handler: Collections.createOne
  },
  {
    method: 'PUT',
    path: '/api/collections/{id}',
    handler: Collections.updateOne
  },
  {
    method: 'DELETE',
    path: '/api/collections/{id}',
    handler: Collections.deleteOne
  },
  {
    method: 'POST',
    path: '/api/collections/{id}/heart',
    handler: Collections.heart
  },
  {
    method: 'POST',
    path: '/api/profiles',
    handler: Profiles.create
  },
  {
    method: 'GET',
    path: '/api/profiles/{id}',
    handler: Profiles.find
  },
  {
    method: 'PUT',
    path: '/api/profiles/{id}',
    handler: Profiles.update
  }
]
