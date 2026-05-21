import { createServer } from 'node:http'
import { handler } from './dist/server/index.mjs'

const port = process.env.PORT || 3000
const server = createServer(handler)

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
