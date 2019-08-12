const port = 3333

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

// middlewares
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function() {
  console.log(`Server running on port ${port}`)
})

module.exports = server
