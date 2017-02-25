'use strict'

// handlers
const Collections = require('./handlers/collections')
const Comments = require('./handlers/comments')
const Profiles = require('./handlers/profiles')
const Resources = require('./handlers/resources')

// schemas
const collectionSchema = require('./schemas/collection')
const commentSchema = require('./schemas/comment')
const resourceSchema = require('./schemas/resource')

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
    path: '/api/collections/{collectionId}',
    handler: Collections.findOne
  },
  {
    method: 'PUT',
    path: '/api/collections/{collectionId}',
    handler: Collections.updateOne
  },
  {
    method: 'DELETE',
    path: '/api/collections/{collectionId}',
    handler: Collections.deleteOne
  },
  {
    method: 'GET',
    path: '/api/collections/{collectionId}/comments',
    handler: Comments.find
  },
  {
    method: 'POST',
    path: '/api/collections/{collectionId}/comments',
    handler: Comments.create,
    config: {
      validate: {
        payload: commentSchema
      }
    }
  },
  {
    method: 'POST',
    path: '/api/collections/{collectionId}/heart',
    handler: Collections.heart
  },
  {
    method: 'GET',
    path: '/api/collections/{collectionId}/resources',
    handler: Resources.find
  },
  {
    method: 'POST',
    path: '/api/collections/{collectionId}/resources',
    handler: Resources.createOne,
    config: {
      validate: {
        payload: resourceSchema
      }
    }
  },
  {
    method: 'PUT',
    path: '/api/collections/{collectionId}/resources/{resourceId}',
    handler: Resources.updateOne
  },
  {
    method: 'DELETE',
    path: '/api/collections/{collectionId}/resources/{resourceId}',
    handler: Resources.deleteOne
  },
  {
    method: 'POST',
    path: '/api/profiles',
    handler: Profiles.create
  },
  {
    method: 'GET',
    path: '/api/profiles/{profileId}',
    handler: Profiles.findOne
  },
  {
    method: 'PUT',
    path: '/api/profiles/{profileId}',
    handler: Profiles.update
  }
]
