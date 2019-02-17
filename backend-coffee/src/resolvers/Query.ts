import { QueryResolvers } from "../generated/graphqlgen"

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  model: (parent, args, ctx) => {
    const res = Math.random() * 100
    return { yield: Math.round(res * 100) / 100 }
  }
}
