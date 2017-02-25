'use strict'

// handlers
const Collections = require('./handlers/collections')
const Profiles = require('./handlers/profiles')
const Resources = require('./handlers/resources')

// schemas
const collectionSchema = require('./schemas/collection')
const resourceSchema = require('./schemas/resources')

// routes
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
    method: 'GET',
    path: '/api/collections/{id}/resources',
    handler: Resources.find
  },
  {
    method: 'POST',
    path: '/api/collections/{id}/resources',
    handler: Resources.createOne,
    config: {
      validate: {
        payload: resourceSchema
      }
    }
  },
  {
    method: 'GET',
    path: '/api/collections/{id}/resources/{resourceid}',
    handler: Resources.findOne
  },
  {
    method: 'PUT',
    path: '/api/collections/{id}/resources/{resourceid}',
    handler: Resources.updateOne
  },
  {
    method: 'DELETE',
    path: '/api/collections/{id}/resources/{resourceid}',
    handler: Resources.deleteOne
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
