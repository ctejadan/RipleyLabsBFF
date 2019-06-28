const redis = require("redis")
const client = redis.createClient({
  host: 'ec2-52-206-114-45.compute-1.amazonaws.com',
  port: 10669,
  password: 'p29f2f880bb71614588c5a88b9bf27bba0c0438f550d0928eb9f079b2d4e71579'
})
const timeToLive = 60

checkIfDataInRedis = (city) => {
  return new Promise((resolve, reject) => {
    client.get(city, function (err, reply) {
      resolve(reply)
    })
  })
}

saveDataToRedis = (city, body) => {
  client.set(city, JSON.stringify(body), 'EX', timeToLive)
}

module.exports = { checkIfDataInRedis, saveDataToRedis }
