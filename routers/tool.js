
const express = require('express')
const { createTool, getTool } = require('../controllers/tools')


const routers = express.Router()


routers.post('/tool' , createTool)
routers.get('/tool' , getTool)

module.exports = routers