'use strict'

const Resources = require('./handlers/resources')
const Profiles = require('./handlers/profiles')

module.exports = [
  {
    method: 'GET',
    path: '/api/resources',
    handler: Resources.find
  },
  {
    method: 'POST',
    path: '/api/resources',
    handler: Resources.create
  },
  {
    method: 'GET',
    path: '/api/resources/{id}',
    handler: Resources.findOne
  },
  {
    method: 'POST',
    path: '/api/resources/{id}',
    handler: Resources.createOne
  },
  {
    method: 'PUT',
    path: '/api/resources/{id}',
    handler: Resources.updateOne
  },
  {
    method: 'DELETE',
    path: '/api/resources/{id}',
    handler: Resources.deleteOne
  },
  {
    method: 'POST',
    path: '/api/resources/{id}/heart',
    handler: Resources.heart
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
