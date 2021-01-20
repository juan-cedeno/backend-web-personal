const {Schema , model} = require('mongoose')

const toolsSchema = new Schema ({
    image : String
})

module.exports = model('Tool' , toolsSchema)