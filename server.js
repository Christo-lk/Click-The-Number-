
// define node express  which runs the server
const express = require('express')

// require handlebars framewoek
const hbs = require('express-handlebars')

const server = express()

// sets up public folder
server.use(express.static('public'))

// allows node to read whats coming in and out from the server
server.use(express.urlencoded({extended:false}))

// handlebars config
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// config routes
const routes = require('./routes')
server.use('/', routes)

module.exports = server