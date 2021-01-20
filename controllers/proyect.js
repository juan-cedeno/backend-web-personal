const { response, request } = require("express");
const Proyect = require('../model/proyect')


const createProyect = async (req = request , res = response) => {

    try {

        const proyects = new Proyect(req.body)


        await proyects.save()

        res.status(201).json({
            ok : true,
            proyects
        })


     } catch (error) {
        console.log(error);
        res.status(500).json({
            ok :false,
            message:'comunicarse con soporte tecnico'
        })
    }
}

const getProyect =  async (req = request , res = response) => {

    try {
        const proyects = await Proyect.find()

        res.status(200).json({
            ok : true,
            proyects
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok :false,
            message:'comunicarse con soporte tecnico'
        })
    }

}

module.exports = {
    createProyect,
    getProyect
}