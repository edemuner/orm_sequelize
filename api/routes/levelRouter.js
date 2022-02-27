const { Router } = require('express')
const LevelController = require('../controllers/LevelController')

const router = Router()

router.get('/level', LevelController.getAllLevels)
router.get('/level/:id', LevelController.getLevel)
router.post('/level', LevelController.createLevel)
router.put('/level/:id', LevelController.update)
router.delete('/level/:id', LevelController.delete)

module.exports = router