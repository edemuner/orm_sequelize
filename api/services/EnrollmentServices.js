const Services = require('./Services')
const database = require('../models')


class EnrollmentServices extends Services {

    constructor(){
        super('Enrollments')
    }

    async getEnrollmentRegister(studentId, enrollmentId){
        return database[this.modelName].findAll({
            where: {
                student_id: studentId,
                id: enrollmentId
            }})
    }

    async deleteEnrollmentRegister(studentId, enrollmentId){
        return database[this.modelName].destroy({
            where: {
                student_id: studentId,
                id: enrollmentId
            }
        })
    }

    async restoreEnrollmentRegister(studentId, enrollmentId){
        return database[this.modelName].restore({
            where: {
                student_id: studentId,
                id: enrollmentId
            }
        })
    }

    async getRegisterByStudent(studentId){
        return database[this.modelName].getEnrolledClasses()
    }
}

module.exports = EnrollmentServices