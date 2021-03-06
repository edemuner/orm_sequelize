const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')

const router = Router()

router.get('/people/active', PeopleController.getAllActivePeople)
router.get('/people', PeopleController.getAllPeople)
router.get('/people/:id', PeopleController.getPeople)
router.get('/people/:studentId/enrollments', PeopleController.getEnrollmentByStudent)
router.post('/people', PeopleController.createPeople)
router.put('/people/:id', PeopleController.updatePeople)
router.delete('/people/:id', PeopleController.deletePeople)
router.post('/people/:id/restore', PeopleController.restorePeople)

router.get('/people/:studentId/enrollments/:enrollmentId', PeopleController.getEnrollment)
router.get('/people/enrollments/:classId/confirmed', PeopleController.getEnrollmentByClass)
router.get('/people/enrollments/full', PeopleController.getFullClasses)
router.post('/people/:studentId/enrollments', PeopleController.createEnrollment)
router.put('/people/:studentId/enrollments/:enrollmentId', PeopleController.updateEnrollment)
router.delete('/people/:studentId/enrollments/:enrollmentId', PeopleController.deleteEnrollment)
router.post('/people/:studentId/enrollments/:enrollmentId/restore', PeopleController.restoreEnrollment)
router.post('/people/:studentId/cancel', PeopleController.cancelPeople)


module.exports = router