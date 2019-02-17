import { QueryResolvers } from "../generated/graphqlgen"

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  model: (parent, args, ctx) => {
    throw new Error("Resolver not implemented")
  }
}
