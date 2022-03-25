import pino, { LoggerOptions } from 'pino'

export { Logger } from 'pino'

const initialize = (options: Pick<LoggerOptions, 'enabled'>) => pino(options)

export default initialize
