const router = require('koa-router')()
const controller = require('./controller')
const { checkIfDataInRedis, saveDataToRedis } = require('../../redisHelper')

router.get('/:city', async ctx => {
  const { city } = ctx.params

  const storedInRedis = await checkIfDataInRedis(city)
  if (storedInRedis) {
    ctx.body = storedInRedis
  } else {
    const body = await controller.byCity(city)
    saveDataToRedis(city, body)
    ctx.body = body
  }
})

module.exports = router.routes()
