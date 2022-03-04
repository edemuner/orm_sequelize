const database = require('../models').Classes
const Op = require('sequelize').Op
const {ClassesServices} = require('../services')
const classesServices = new ClassesServices()

class ClassesController {

    static async getAllClasses(req, res){
        const { starting_date, final_date } = req.query
        const where = {}
        starting_date || final_date ? where.start_date = {} : null
        starting_date ? where.start_date[Op.gte] = starting_date : null
        final_date ? where.start_date[Op.lte] = final_date : null
        try{
            const classes = await classesServices.getAllRegisters(where)
            return res.status(200).json(classes)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async getClasses(req, res){
        const { id } = req.params
        try{
            const oneClass = await classesServices.getOneRegister(id)
            return res.status(200).json(oneClass)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async createClass(req, res){
        try{
            const newClass = await classesServices.createRegister(req.body)
            return res.status(200).json(newClass)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async update(req, res){
        const { id } = req.params
        const data = req.body
        try{
            await classesServices.updateRegister(data, id)
            const updatedClass = await classesServices.getOneRegister(id)
            return res.status(200).json(updatedClass)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res){
        const { id } = req.params
        try{
            await classesServices.removeRegister(id)
            res.status(200).json({ message: `id ${id} was deleted`})
        } catch(error){
            res.status(500).json(error.message)
        }
    }

    static async restoreClass(req, res){
        const { id } = req.params
        try{
            await classesServices.restoreRegister(id)
            return res.status(200).json({ message: `id ${id} restored`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ClassesController