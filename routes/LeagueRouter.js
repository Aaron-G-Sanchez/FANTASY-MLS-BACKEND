const { Router } = require('express')
const controllers = require('../controllers/LeagueController')

const router = Router()

router.get('/', controllers.GetLeagues)

router.post('/', controllers.CreateLeague)

module.exports = router
