'use strict'

const Resources = require('./handlers/resources')
const Profile = require('./handlers/profile')

module.exports = [
  {
    method: 'GET',
    path: '/api/resources',
    handler: Resources.find
  },
  {
    method: 'POST',
    path: '/api/resource',
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
    path: '/api/profile',
    handler: Profile.create
  },
  {
    method: 'GET',
    path: '/api/profile/{id}',
    handler: Profile.find
  },
  {
    method: 'PUT',
    path: '/api/profile/{id}',
    handler: Profile.update
  }
]
