
const mongodb = require('mongodb')
const R = require('r-script')
const fs = require('fs')
//
exports.postReq = async (ctx, next) => {
  console.log(ctx.request.body)
  const out = await R("./Rcode/Rrainfall.R")
    .data(ctx.request.body)
    .callSync()
      console.log("Data returned from R:", out)
  ctx.response.body = await out
}

exports.modelData = async (ctx, next) => {
  console.log(ctx.request.body)
  const out = await R("./Rcode/fullerCoffeeModel/RcoffeeModelNew.R")
    .data(ctx.request.body)
    .callSync()
      console.log("Data returned from R:", out)
  ctx.response.body = await out
}


exports.modelOptimized = async (ctx, next) => {
  console.log(ctx.request.body)
  const out = await R("./Rcode/fullerCoffeeModel/RcoffeeModelOptimize.R")
    .data(ctx.request.body)
    .callSync()
      console.log("Data returned from R:", out)
  ctx.response.body = await out
}
