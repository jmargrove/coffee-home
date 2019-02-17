import { ApolloServer } from "apollo-server"
import { resolvers } from "./resolvers/"
const typeDefs = require("./schema.graphql")

const view = () => {
  console.log("Coffee server is working ☕️🐸")

  const server = new ApolloServer({ resolvers, typeDefs })

  server.listen({ port: 3434 }, () => {
    console.log("Coffee ☕️ server is now listening on localhost:3434")
  })
}

view()
