import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';

export interface IIDConfig {
  PORT: number;
}

export type IDMConfigService = ConfigService<IIDConfig>;

export const CONFIG_MODULE_ROOT_IMPORT = ConfigModule.forRoot({
  cache: true,
  validationSchema: Joi.object({
    PORT: Joi.number().required(),
  }),
  load: [],
});
