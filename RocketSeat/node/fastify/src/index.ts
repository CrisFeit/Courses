// Import the framework and instantiate it
import Fastify from 'fastify'
import { message } from './controller/handler'

const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/', message)

// Run the server!
try {
  fastify.listen({ port: 3000 }).then((address) => {
    console.log(`server listening on ${address}`);
  })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

