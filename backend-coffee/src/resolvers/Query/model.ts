import { QueryResolvers } from "../../generated/graphqlgen"

export const model: QueryResolvers.ModelResolver = (parent, args, ctx) => {
  const res = Math.random() * 100
  return { yield: Math.round(res * 100) / 100 }
}
