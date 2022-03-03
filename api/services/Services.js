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

    async updateRegister(updatedData, id, transaction={}){
        return database[this.modelName]
        .update(updatedData, { where: {id:id}}, transaction)
    }

    async updateRegisters(updatedData, where, transaction={}){
        return database[this.modelName]
        .update(updatedData, { where: {...where}}, transaction)
    }

    async removeRegister(id){

    }
}

module.exports = Services