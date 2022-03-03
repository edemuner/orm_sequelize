const Services = require('./Services')
const database = require('../models')

class PeopleServices extends Services {

    constructor(){
        super('People')
        this.enrollments = new Services('Enrollments')
    }

    async getActiveRegisters(where={}){
        return database[this.modelName].findAll({ where: {...where} })
    }

    async getAllRegisters(where={}){
        return database[this.modelName]
        .scope('all')
        .findAll({ where: { ...where }})
    }

    async cancelPeopleAndEnrollment(studentId){
        return database.sequelize.transaction(async transaction => {
            await super.updateRegister({ active:false}, studentId, {
                transaction: transaction
            })
            await this.enrollments.updateRegisters({status: 'cancelled'}, {
                student_id: studentId
            },
            {
                transaction: transaction
            })
        })

    }




}

module.exports = PeopleServices