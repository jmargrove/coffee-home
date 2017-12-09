const Router = require('koa-router')
const router = new Router()

const Koa = require('koa');
const app = new Koa();
const controler = require('./controler.js')

router.post('/Rcode', controler.postReq)
router.get('/Rcode')

module.exports = router
