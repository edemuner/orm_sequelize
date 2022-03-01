const peopleDb = require('../models').People
const enrollmentDb = require('../models').Enrollments

class PeopleController {

    static async getAllActivePeople(req, res){

        try{
            const allActivePeople = await peopleDb.findAll()
            return res.status(200).json(allActivePeople)
        } catch(error){
            return res.status(500).json(error)
        }
    }

    static async getAllPeople(req, res){

        try{
            const allPeople = await peopleDb.scope('all').findAll()
            return res.status(200).json(allPeople)
        } catch(error){
            return res.status(500).json(error)
        }
    }

    static async getPeople(req, res){
        const { id } = req.params
        try {
            const person =  await peopleDb.findOne({ 
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
            const createdPerson = await peopleDb.create(newPerson)
            return res.status(200).json(createdPerson)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updatePeople(req, res){
        const newData = req.body
        const { id } = req.params
        try {
            await peopleDb.update(newData, { 
                where: { id: Number(id) }
             })
             const updatedPerson = await peopleDb.findOne({where:{id:Number(id)}})
             return res.status(200).json(updatedPerson)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deletePeople(req, res){
        const { id } = req.params
        try {
            await peopleDb.destroy({where:{id:id}})
            return res.status(200).json({ message: `id ${id} was deleted`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async restorePeople(req, res){
        const { id } = req.params
        try{
            await peopleDb.restore({ where: {
                id:Number(id)
            }})
            return res.status(200).json({ message: `id ${id} restored`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async getEnrollment(req, res){
        const { studentId, enrollmentId } = req.params
        try {
            console.log(enrollmentDb)
            const enrollment =  await enrollmentDb.findOne({ 
                where: {
                    id: Number(enrollmentId),
                    student_id: Number(studentId)
            } })
            return res.status(200).json(enrollment)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async createEnrollment(req, res){
        const { studentId } = req.params
        const newEnrollment = {...req.body, student_id: Number(studentId) }
        try {
            const createdEnrollment = await enrollmentDb.create(newEnrollment)
            return res.status(200).json(createdEnrollment)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updateEnrollment(req, res){
        const { studentId, enrollmentId } = req.params
        const newData = req.body
        try {
            await enrollmentDb.update(newData, { 
                where: { id: Number(enrollmentId), 
                        student_id: Number(studentId) }
             })
             const updatedEnrollment = await enrollmentDb.findOne({where:{id:Number(enrollmentId)}})
             return res.status(200).json(updatedEnrollment)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deleteEnrollment(req, res){
        const { studentId, enrollmentId } = req.params
        try {
            await enrollmentDb.destroy({
                where:{
                    id:enrollmentId,
                    student_id:Number(studentId)
                }})
            return res.status(200).json({ message: `id ${enrollmentId} was deleted`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async restoreEnrollment(req, res){
        const { studentId, enrollmentId } = req.params
        try{
            await enrollmentDb.restore({ where: {
                id:Number(enrollmentId),
                student_id: Number(studentId)
            }})
            return res.status(200).json({ message: `id ${enrollmentId} restored`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async getEnrollmentByStudent(req, res){
        const { studentId } = req.params
        try {
            const person = await peopleDb.findOne({ where: {
                id: Number(studentId)
            }})
            const enrollments = await person.getEnrolledClasses()
            return res.status(200).json(enrollments)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PeopleController