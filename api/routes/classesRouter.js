const { Router } = require('express')
const ClassesController = require('../controllers/ClassesController')

const router = Router()

router.get('/classes', ClassesController.getAllClasses)
router.get('/classes/:id', ClassesController.getClasses)
router.post('/classes', ClassesController.createClass)
router.put('/classes/:id', ClassesController.update)
router.delete('/classes/:id', ClassesController.delete)
router.post('/classes/:id/restore', ClassesController.restoreClass)

module.exports = router