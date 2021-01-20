
const {Schema , model} = require('mongoose')



const proyectSchema = new Schema({
    name : {
        type : String,
        required : true
    },

    image : {
        type : String,
        required : true
    },

    link : {
        type : String,
        required : true
    },

    image2 : String,
    image3 : String,
    type : {
        type : String,
        required : true
    }
})

module.exports = model('Proyect' , proyectSchema)