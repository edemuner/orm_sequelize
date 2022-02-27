const { Router } = require('express')
const ClassesController = require('../controllers/ClassesController')

const router = Router()

router.get('/classes', ClassesController.getAllClasses)
router.get('/classes/:id', ClassesController.getClasses)

module.exports = router