const Services = require('./Services')
const database = require('../models')

class PeopleServices extends Services {

    constructor(){
        super('People')
    }

    async getActiveRegisters(where={}){
        return database[this.modelName].findAll({ where: {...where} })
    }

    async getAllRegisters(where={}){
        return database[this.modelName]
        .scope('all')
        .findAll({ where: { ...where }})
    }


}

module.exports = PeopleServices