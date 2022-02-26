const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')

const router = Router()

router.get('/people', PeopleController.getAllPeople)

router.get('/people/:id', PeopleController.getPeople)

router.post('/people', PeopleController.createPeople)

module.exports = router