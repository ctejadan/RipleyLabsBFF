const router = require('koa-router')()
const controller = require('./controller')
const redis = require("redis")
const client = redis.createClient()
const timeToLive = 60
router.get('/:city', async ctx => {
  const { city } = ctx.params
  const storedInRedis = client.getAsync(city)

  if (storedInRedis) {
    console.log("saved in redis :D")
    return "stored in redis" + storedInRedis

  } else {
    const body = await controller.byCity(city)

    client.setexAsync(city, timeToLive, JSON.stringify(body))

    ctx.body = body
  }
})

module.exports = router.routes()
