import { ApolloServer } from 'apollo-server'
import { ApolloServerPluginInlineTraceDisabled } from 'apollo-server-core'
import initializeContext from './context'
import { Config, Logger } from './types'
import schema from './schema'

type InitializeServerOptions = {
  config: Config
  logger: Logger
}

const initialize = (options: InitializeServerOptions) => {
  const context = initializeContext(options)

  return new ApolloServer({
    context,
    schema,
    plugins: [ApolloServerPluginInlineTraceDisabled()],
  })
}

export default initialize
