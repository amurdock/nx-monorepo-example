import { User, ResolverFn } from '../../graph'
import { Context } from '../../context'

const me: ResolverFn<User, undefined, Context, unknown> = async () =>
  Promise.resolve({ id: '623b39685eb6ee35fd600495' })

const resolvers = {
  Query: {
    me,
  },
}

export default resolvers
