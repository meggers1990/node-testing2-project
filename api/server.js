const express = require('express')
const Users = require('./users/user-models')
const server = express()
const usersRouter = require('./users/user-routers')

server.use(express.json())

server.use('/api/users', usersRouter)

server.get("/", (req, res) => {
    res.status(200).json({
        api: 'UP'
    })
})


server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })


module.exports = server