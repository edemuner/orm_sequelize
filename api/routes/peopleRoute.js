const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')

const router = Router()

router.get('/people', PeopleController.getAllPeople)
router.get('/people/:id', PeopleController.getPeople)
router.post('/people', PeopleController.createPeople)
router.put('/people/:id', PeopleController.updatePeople)
router.delete('/people/:id', PeopleController.deletePeople)

router.get('/people/:studentId/enrollments/:enrollmentId', PeopleController.getEnrollment)
router.post('/people/:studentId/enrollments', PeopleController.createEnrollment)
router.put('/people/:studentId/enrollments/:enrollmentId', PeopleController.updateEnrollment)
router.delete('/people/:studentId/enrollments/:enrollmentId', PeopleController.deleteEnrollment)



module.exports = router