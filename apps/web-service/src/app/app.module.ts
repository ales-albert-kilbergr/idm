import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { WinstonModule } from 'nest-winston';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthCheckController } from './healthcheck.controller';
import {
  CONFIG_MODULE_ROOT_IMPORT,
  resolveAsyncConfig
} from '../config';

@Module({
  imports: [
    CONFIG_MODULE_ROOT_IMPORT, //
    WinstonModule.forRootAsync(resolveAsyncConfig('winstonConfig')),
    TerminusModule,
  ],
  controllers: [AppController, HealthCheckController],
  providers: [AppService],
})
export class AppModule {}
