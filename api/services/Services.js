const database = require('../models')

class Services {

    constructor(modelName){
        
        this.modelName = modelName
    }

    async getAllRegisters(){
        console.log('oi')
        return database[this.modelName].findAll()
    }
}

module.exports = Services