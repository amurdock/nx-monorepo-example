import { buildSubgraphSchema } from '@apollo/federation'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

const schema = buildSubgraphSchema({
  typeDefs,
  resolvers,
})

export default schema
