import { gql } from 'apollo-server'

const typeDefs = gql`
  type User @key(fields: "id") {
    id: ID!
  }

  extend type Query {
    me: User
  }
`

export default typeDefs
