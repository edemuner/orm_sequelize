const database = require('../models').Classes

class ClassesController {

    static async getAllClasses(req, res){
        try{
            const classes = await database.findAll()
            res.status(200).json(classes)
        } catch(error){
            res.status(500).json(error.message)
        }
    }
}

module.exports = ClassesController