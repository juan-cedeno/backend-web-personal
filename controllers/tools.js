const { response, request } = require("express")
const Tool = require('../model/tools')

const createTool = async ( req = request , res = response ) => {

    try {
        const {image} = req.body

        let tool = new Tool

        tool = Tool(req.body)

        await tool.save()

        res.status(201).json({
            ok : true,
            image : tool.image
        })

    } catch (error) {
        console.log(error);

        res.status(500).json({
            ok :false,
            message:'comunicarse con soporte tecnico'
        })
    }
}

const getTool = async (req = request , res = response) => {

    try {
        const tools = await Tool.find()

        res.status(200).json({
            ok : true,
            tools
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
    createTool,
    getTool
}