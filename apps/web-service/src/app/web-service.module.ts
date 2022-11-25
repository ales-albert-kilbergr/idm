import { NestCsrfModule } from '@idm/nest-csrf';
import { PublicRestApiModule } from '@idm/public-rest-api';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { WinstonModule } from 'nest-winston';
import { HealthCheckController } from './healthcheck.controller';
import { IDMRootController } from './root.controller';
import {
  CONFIG_MODULE_ROOT_IMPORT,
  resolveAsyncConfig
} from '../config';

@Module({
  imports: [
    CONFIG_MODULE_ROOT_IMPORT, //
    WinstonModule.forRootAsync(resolveAsyncConfig('winston')),
    TerminusModule,
    PublicRestApiModule.forRootAsync(resolveAsyncConfig('publicRestApi')),
    NestCsrfModule.forRootAsync(resolveAsyncConfig('csrf')),
  ],
  controllers: [
    HealthCheckController, //
    IDMRootController,
  ],
})
export class IDMWebServiceModule {}
