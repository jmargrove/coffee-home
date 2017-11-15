

export.postModel = (ctx, next) => {
  console.log("posted")
  const db = await MongoClient.connect(url)
  await db.collection("col").insertOne(ctx.request.body);
  // results = await db.collection('col').find({}, ctx.request.body).toArray();
  await db.close()
  // await return results
}

// console.log("posted")
// const db = await MongoClient.connect(url)
// await db.collection("col").insertOne(ctx.request.body);
// results = await db.collection('col').find({}, ctx.request.body).toArray();
// console.log(result)
// await db.close()
