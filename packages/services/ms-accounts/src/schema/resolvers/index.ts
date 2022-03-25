import { UserResolvers } from '../../graph'
import { accounts as data } from '../../data'

const accounts: UserResolvers['accounts'] = async (parent, _args, ctx) => {
  ctx.logger.info({ parent }, 'resolving accounts')
  return Promise.resolve(data)
}

const resolvers = {
  User: {
    accounts,
  },
}

export default resolvers
