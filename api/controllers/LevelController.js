// const database = require('../models').Levels

const Services = require('../services/Services')
const levelServices = new Services('Levels')

class LevelController {

    static async getAllLevels(req, res){
        try{
            const levels = await levelServices.getAllRegisters()
            return res.status(200).json(levels)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async getLevel(req, res){
        const { id } = req.params
        try{
            const level = await levelServices.getOneRegister(Number(id))
            return res.status(200).json(level)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async createLevel(req, res){
        try{
            const newLevel = await levelServices.createRegister(req.body)
            return res.status(200).json(newLevel)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async update(req, res){
        const { id } = req.params
        const data = req.body
        try{
            await levelServices.updateRegister(data, id)
            const updatedLevel = await levelServices.getOneRegister(Number(id))
            return res.status(200).json(updatedLevel)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res){
        const { id } = req.params
        try{
            await levelServices.removeRegister(Number(id))
            res.status(200).json({ message: `id ${id} was deleted`})
        } catch(error){
            res.status(500).json(error.message)
        }
    }

    static async restoreLevel(req, res){
        const { id } = req.params
        try{
            await levelServices.restoreRegister(Number(id))
            return res.status(200).json({ message: `id ${id} restored`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = LevelController