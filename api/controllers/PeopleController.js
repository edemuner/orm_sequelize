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
}

module.exports = PeopleController