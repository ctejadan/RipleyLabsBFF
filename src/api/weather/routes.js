const router = require('koa-router')()
const controller = require('./controller')

router.get('/', async ctx => {
  const { lat, lng } = ctx.request.query
  ctx.body = await controller.getWeather(lat, lng)
})

module.exports = router.routes()
