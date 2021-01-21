const express = require('express')
const routes = express.Router()

const fs = require('fs')

const path = require('path')

module.exports = routes


routes.get('/', (req,res) => {
  console.log("hello")

  res.send("mate hello")
})