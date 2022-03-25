import * as assert from 'assert'
import { Account, User, ResolverFn } from '../../graph'
import { Context } from '../../context'

const accounts: ResolverFn<Account[], User, Context, unknown> = async (
  user
) => {
  assert.equal(user.id, '623b39685eb6ee35fd600495')

  return Promise.resolve([
    {
      id: '623c147aa8389dc9a4e282b7',
      asset: 'GBP',
      balance: 11.23,
    },
    {
      id: '623c14823a3258d924bb8417',
      asset: 'BTC',
      balance: 0.001,
    },
    {
      id: '623c1487be85074469fb7245',
      asset: 'ETH',
      balance: 0.007,
    },
  ])
}

const resolvers = {
  User: {
    accounts,
  },
}

export default resolvers
