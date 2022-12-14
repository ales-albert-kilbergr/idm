import { CsrfConfig } from '@idm/nest-csrf';
import { PublicRestApiConfig } from '@idm/public-rest-api';
import {
  ConfigModule,
  ConfigService
} from '@nestjs/config';
import * as Joi from 'joi';
import { WinstonModuleOptions } from 'nest-winston';
import {
  appConfig,
  IAppConfig
} from './configs/app.config';
import { csrfConfig } from './configs/csrf.config';
import { publicRestApiConfig } from './configs/public-rest-api';
import { winstonConfig } from './configs/winston.config';

export interface IIDConfig {
  PORT: number;
  LOG_LEVEL: 'info' | 'error' | 'debug' | 'warn';
  COOKIE_SECRET: string;
  winston: WinstonModuleOptions;
  publicRestApi: PublicRestApiConfig;
  app: IAppConfig;
  csrf: CsrfConfig;
}

export type IDMConfigService = ConfigService<IIDConfig>;

export const CONFIG_MODULE_ROOT_IMPORT = ConfigModule.forRoot({
  cache: true,
  validationSchema: Joi.object({
    PORT: Joi.number().required(),
    // Use of env variable for logging instead of reading it from environment
    // file will allow change log level in production or during development
    // if needed without a having to release a change in code.
    LOG_LEVEL: Joi.string()
      .valid('info', 'error', 'debug', 'warn')
      .default('info'),
    COOKIE_SECRET: Joi.string().required(),
  }),
  load: [
    winstonConfig, //
    appConfig,
    publicRestApiConfig,
    csrfConfig,
  ],
});

export function resolveAsyncConfig(key: keyof IIDConfig) {
  return {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService<IIDConfig>) => config.get(key),
  };
}
