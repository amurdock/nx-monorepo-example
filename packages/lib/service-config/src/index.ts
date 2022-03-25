import { object, mixed, number, InferType } from 'yup'

export enum Environment {
  TEST = 'test',
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export const BaseConfigSchema = object({
  env: mixed<Environment>().oneOf(Object.values(Environment)).required(),
  port: number().required(),
})

export type BaseConfig = InferType<typeof BaseConfigSchema>

export const initialize =
  <TSchema extends typeof BaseConfigSchema>(schema: TSchema) =>
  (
    value: Record<string, unknown> = {
      env: process.env.NODE_ENV,
      port: Number(process.env.PORT || '4000'),
    }
  ): InferType<typeof schema> =>
    schema.validateSync(value)

export const initializeBase = initialize(BaseConfigSchema)
