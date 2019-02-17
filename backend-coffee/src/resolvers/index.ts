import { Resolvers } from "../generated/graphqlgen"
import { Query } from "./Query"
import { ModelPayload } from "./ModelPayload"

export const resolvers: Resolvers = {
  Query,
  ModelPayload
}
