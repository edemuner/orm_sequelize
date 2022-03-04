// const peopleDb = require('../models').People
// const enrollmentDb = require('../models').Enrollments

const {PeopleServices, EnrollmentServices} = require('../services')
const peopleServices = new PeopleServices()
const enrollmentServices = new EnrollmentServices()

class PeopleController {

    static async getAllActivePeople(req, res){

        try{
            const allActivePeople = await peopleServices.getActiveRegisters()
            return res.status(200).json(allActivePeople)
        } catch(error){
            return res.status(500).json(error)
        }
    }

    static async getAllPeople(req, res){

        try{
            const allPeople = await peopleServices.getAllRegisters()
            return res.status(200).json(allPeople)
        } catch(error){
            return res.status(500).json(error)
        }
    }

    static async getPeople(req, res){
        const { id } = req.params
        try {
            const person =  await peopleServices.getOneRegister(Number(id))
            return res.status(200).json(person)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async createPeople(req, res){
        const newPerson = req.body
        try {
            const createdPerson = await peopleServices.createRegister(newPerson)
            return res.status(200).json(createdPerson)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updatePeople(req, res){
        const newData = req.body
        const { id } = req.params
        try {
            await peopleServices.updateRegister(newData, Number(id))
             const updatedPerson = await peopleServices.getOneRegister(Number(id))
             return res.status(200).json(updatedPerson)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deletePeople(req, res){
        const { id } = req.params
        try {
            await peopleServices.removeRegister(Number(id))
            return res.status(200).json({ message: `id ${id} was deleted`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async restorePeople(req, res){
        const { id } = req.params
        try{
            await peopleServices.restoreRegister(Number(id))
            return res.status(200).json({ message: `id ${id} restored`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async getEnrollment(req, res){
        const { studentId, enrollmentId } = req.params
        try {
            const enrollment =  await enrollmentServices
                .getOneRegister(Number(studentId), Number(enrollmentId))
            return res.status(200).json(enrollment)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async createEnrollment(req, res){
        const { studentId } = req.params
        const newEnrollment = {...req.body, student_id: Number(studentId) }
        try {
            const createdEnrollment = await enrollmentServices.createRegister(newEnrollment)
            return res.status(200).json(createdEnrollment)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updateEnrollment(req, res){
        const { studentId, enrollmentId } = req.params
        const newData = req.body
        try {
            await enrollmentServices.updateRegisters(newData, 
                    { id: Number(enrollmentId), 
                    student_id: Number(studentId) 
             })
             const updatedEnrollment = await enrollmentServices
                            .getEnrollmentRegister(Number(studentId), Number(enrollmentId))
             return res.status(200).json(updatedEnrollment)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deleteEnrollment(req, res){
        const { studentId, enrollmentId } = req.params
        try {
            await enrollmentServices.removeRegister(Number(studentId), Number(enrollmentId))
            return res.status(200).json({ message: `id ${enrollmentId} was deleted`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async restoreEnrollment(req, res){
        const { studentId, enrollmentId } = req.params
        try{
            await enrollmentServices.restoreRegister(Number(studentId), Number(enrollmentId))
            return res.status(200).json({ message: `id ${enrollmentId} restored`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async getEnrollmentByStudent(req, res){
        const { studentId } = req.params
        try {
            const enrollments = await peopleServices.getEnrollmentsByStudent(Number(studentId))
            return res.status(200).json(enrollments)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async getEnrollmentByClass(req, res){
        const { classId } = req.params
        try {
            const allEnrollments = await enrollmentServices
                .getEnrollmentRegisterByClass(classId)
            return res.status(200).json(allEnrollments)

        //my solution (doesn't fit all requisites)
        //     const aClass = await classDb.findOne({ where: {
        //         id: Number(classId)
        //     }})
        //     const enrollments = await aClass.getEnrollments()
        //     return res.status(200).json(enrollments)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async getFullClasses(req, res){
        try {
            const fullClasses = await enrollmentServices.getFullClasses()
            return res.status(200).json(fullClasses.count)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async cancelPeople(req, res){
        const { studentId } = req.params
        try {
            await peopleServices.cancelPeopleAndEnrollment(Number(studentId))
            return res.status(200)
            .json({ message: `student ${studentId} and related enrollments were canceled`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PeopleController