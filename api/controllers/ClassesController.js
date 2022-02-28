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

    static async createClass(req, res){
        try{
            const newClass = await database.create(req.body)
            return res.status(200).json(newClass)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async update(req, res){
        const { id } = req.params
        const data = req.body
        try{
            await database.update(data, { where: { id: Number(id)}})
            const updatedClass = await database.findOne({ where: {id: Number(id)}})
            return res.status(200).json(updatedClass)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res){
        const { id } = req.params
        try{
            await database.destroy({ where: { id: Number(id)}})
            res.status(200).json({ message: `id ${id} was deleted`})
        } catch(error){
            res.status(500).json(error.message)
        }
    }

    static async restoreClass(req, res){
        const { id } = req.params
        try{
            await database.restore({ where: {
                id:Number(id),
            }})
            return res.status(200).json({ message: `id ${id} restored`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ClassesController