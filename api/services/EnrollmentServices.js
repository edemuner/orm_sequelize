const Services = require('./Services')
const database = require('../models')
const Sequelize = require('sequelize')



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

    async getEnrollmentRegisterByClass(classId){
        return database[this.modelName].findAndCountAll({
            where: {
                class_id: Number(classId),
                status: 'confirmed'
            },
            limit:20,
            order: [[ 'student_id', 'ASC' ]]
        })
    }

    async getFullClasses(){
        const full = 2
        return database[this.modelName].findAndCountAll({
            where: {
                status: 'confirmed'
            },
            attributes: ['class_id'],
            group: ['class_id'],
            having: Sequelize.literal(`count(class_id) >= ${full}`)
        })
    }
}

module.exports = EnrollmentServices