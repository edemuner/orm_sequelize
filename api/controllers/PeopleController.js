const database = require('../models')

class PeopleController {

    static async getAllPeople(req, res){

        try{
            const allPeople = await database.People.findAll()
            return res.status(200).json(allPeople)
        } catch(error){
            return res.status(500).json(error)
        }
    }

    static async getPeople(req, res){
        const { id } = req.params
        try {
            const person =  await database.People.findOne({ 
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
            const createdPerson = await database.People.create(newPerson)
            return res.status(200).json(createdPerson)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PeopleController