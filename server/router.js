const Router = require('koa-router')
const router = new Router()

const Koa = require('koa');
const app = new Koa();
const controler = require('./controler.js')

router.post('/Rcode', controler.postReq)
router.post('/model-data', controler.modelData)
router.post('/optimize', controler.modelOptimized)
router.get('/Rcode')

module.exports = router
