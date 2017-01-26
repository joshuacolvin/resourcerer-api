const Hapi = require('hapi')
const server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: process.env.port || 3000
})

server.route(require('./routes'))

server.start(function () {
  console.log('Serving on port: ', server.info.uri)
})
