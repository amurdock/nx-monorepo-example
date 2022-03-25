import { gql } from 'apollo-server'

const typeDefs = gql`
  type Account @key(fields: "id") {
    id: ID!
    asset: String!
    balance: Float!
  }

  extend type User @key(fields: "id") {
    id: ID! @external
    accounts: [Account]
  }
`

export default typeDefs
