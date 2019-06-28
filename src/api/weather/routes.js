const router = require('koa-router')()
const controller = require('./controller')
const { checkIfDataInRedis, saveDataToRedis } = require('../../redisHelper')

router.get('/', async ctx => {
  const { lat, lng } = ctx.request.query

  const keyConcat = [lat, lng].join('')
  const storedInRedis = await checkIfDataInRedis(keyConcat)
  if (storedInRedis) {
    ctx.body = storedInRedis
  } else {
    const body = await controller.getWeather(lat, lng)
    saveDataToRedis(keyConcat, body)
    ctx.body = body
  }
})

module.exports = router.routes()
