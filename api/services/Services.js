const database = require('../models')

class Services {

    constructor(modelName){
        
        this.modelName = modelName
    }

    async getAllRegisters(){
        return database[this.modelName].findAll()
    }

    async getOneRegister(id){

    }

    async createRegister(data){

    }

    async updateRegister(updatedData, id){

    }

    async removeRegister(id){

    }
}

module.exports = Services