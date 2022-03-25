import { Request, Response } from 'express'
import { ContextFunction } from 'apollo-server-core'
import { Config, Logger } from '../types'

export type ExpressContext = {
  req: Request
  res: Response
}

export type ContextOptions = {
  config: Config
  logger: Logger
}

export type Context = ExpressContext & ContextOptions

const initializeContext =
  (options: ContextOptions): ContextFunction<ExpressContext> =>
  (params) => ({
    ...params,
    ...options,
  })

export default initializeContext
