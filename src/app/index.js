const Koa = require('koa')
const router = require('./../routes')
const Cors = require('@koa/cors')
const Helmet = require('koa-helmet')
const Respond = require('koa-respond')

const app = new Koa()

app.use(Helmet())
app.use(Cors())

app.use(Respond())

app.use(router.routes())
app.use(router.allowedMethods())
module.exports = app
