const router = require('koa-router')()
const controller = require('./controller')
const redis = require("redis")
const client = redis.createClient({
  host: 'ec2-52-206-114-45.compute-1.amazonaws.com',
  port: 10669,
  password: 'p29f2f880bb71614588c5a88b9bf27bba0c0438f550d0928eb9f079b2d4e71579'
})
const timeToLive = 60
router.get('/:city', async ctx => {
  const { city } = ctx.params
  const storedInRedis = await client.get(city).then(result => result).catch(e => console.log(e)

  console.log(storedInRedis)

  if (storedInRedis) {
    console.log("saved in redis :D ", storedInRedis)
    ctx.body = { data: "stored in redis" + storedInRedis }

  } else {
    console.log("not found in redis")
    const body = await controller.byCity(city)

    await client.set(city, JSON.stringify(body), 'EX', timeToLive)

    ctx.body = body
  }
})

module.exports = router.routes()
