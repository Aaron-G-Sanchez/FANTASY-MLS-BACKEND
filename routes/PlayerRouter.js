const { Router } = require('express')
const controllers = require('../controllers/PlayerController')

const router = Router()

router.get('/', controllers.GetAllPlayers)

module.exports = router
