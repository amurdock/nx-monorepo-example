import initializeLogger from '@mode/service-logger'
import { initializeBase as initConfig, Environment } from '@mode/service-config'
import initializeServer from './server'

void (async () => {
  const logger = initializeLogger({
    enabled: process.env.NODE_ENV !== Environment.TEST,
  })

  try {
    logger.info('starting federated graphql service')

    const config = initConfig()

    await initializeServer({ config, logger }).listen({ port: config.port })
    logger.info(config, 'started federated graphql service')
  } catch (error) {
    logger.error(error, 'error when starting federated graphql service')
  }
})()
