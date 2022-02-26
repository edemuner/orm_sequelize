const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')

const router = Router()

router.get('/people', PeopleController.getAllPeople)
router.get('/people/:id', PeopleController.getPeople)
router.post('/people', PeopleController.createPeople)
router.put('/people/:id', PeopleController.update)

module.exports = router