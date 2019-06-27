const Router = require('koa-router')
const weather = require('./../api/weather/routes')

const router = new Router()

router.use('/weather', weather)

module.exports = router
