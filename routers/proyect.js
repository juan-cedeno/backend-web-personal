

const express = require('express')
const { check } = require('express-validator')
const { createProyect  , getProyect } = require('../controllers/proyect')
const {validateCamp} = require('../middleware/vlidate-camp')

const routers = express.Router()

routers.post('/proyect' , 
[
    check('name' , 'Name is required').not().isEmpty(),
    check('image' , 'Image is required').not().isEmpty(),
    check('type' , 'Type is required').not().isEmpty(),
    check('link' , 'Linkx is required').not().isEmpty(),
    check('type' , 'It must be all in isUppercase letters').isUppercase(),
    validateCamp

]
 , createProyect)

 routers.get('/proyect' , getProyect)

module.exports = routers