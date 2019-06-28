const Router = require('koa-router')
const weather = require('./../api/weather/routes')
const coordinates = require('./../api/coordinates/routes')

const router = new Router()

router.use('/weather', weather)
router.use('/coordinates', coordinates)

module.exports = router
