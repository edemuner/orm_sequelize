const database = require('../models').People

class PeopleController {

    static async getAllPeople(req, res){

        try{
            const allPeople = await database.findAll()
            return res.status(200).json(allPeople)
        } catch(error){
            return res.status(500).json(error)
        }
    }

    static async getPeople(req, res){
        const { id } = req.params
        try {
            const person =  await database.findOne({ 
                where: {
                    id: Number(id)
            } })
            return res.status(200).json(person)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async createPeople(req, res){
        const newPerson = req.body
        try {
            const createdPerson = await database.create(newPerson)
            return res.status(200).json(createdPerson)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async update(req, res){
        const newData = req.body
        const { id } = req.params
        try {
            await database.update(newData, { 
                where: { id: Number(id) }
             })
             const updatedPerson = await database.findOne({where:{id:Number(id)}})
             return res.status(200).json(updatedPerson)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res){
        const { id } = req.params
        try {
            await database.destroy({where:{id:id}})
            return res.status(200).json({ message: `id ${id} was deleted`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PeopleController