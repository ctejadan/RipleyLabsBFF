const router = require('koa-router')()
const controller = require('./controller')

router.get('/:city', async ctx => {
  const { city } = ctx.params
  ctx.body = await controller.byCity(city)
})

module.exports = router.routes()
