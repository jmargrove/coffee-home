import { QueryResolvers } from "../generated/graphqlgen"
import { model } from "./Query/model"

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  model
}
