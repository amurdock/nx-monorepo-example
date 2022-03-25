import { users } from '../../data'

const resolvers = {
  Query: {
    me() {
      // decode JWT token and lookup the user in Auth0
      return users[0]
    },
  },
  User: {
    __resolveReference(reference: { id: string }) {
      return users.find((user) => user.id === reference.id)
    },
  },
}

export default resolvers
