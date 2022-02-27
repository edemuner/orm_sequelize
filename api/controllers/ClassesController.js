const database = require('../models').Classes

class ClassesController {

    static async getAllClasses(req, res){
        try{
            const classes = await database.findAll()
            return res.status(200).json(classes)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async getClasses(req, res){
        const { id } = req.params
        try{
            const oneClass = await database.findOne({ where: { id: Number(id)} })
            return res.status(200).json(oneClass)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ClassesController