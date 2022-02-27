const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')

const router = Router()

router.get('/people', PeopleController.getAllPeople)
router.get('/people/:id', PeopleController.getPeople)
router.post('/people', PeopleController.createPeople)
router.put('/people/:id', PeopleController.update)
router.delete('/people/:id', PeopleController.delete)
router.get('/people/:studentId/enrollments/:enrollmentId', PeopleController.getEnrollment)

module.exports = router