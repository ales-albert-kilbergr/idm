import { Module } from '@nestjs/common';
import { CONFIG_MODULE_ROOT_IMPORT, resolveAsyncConfig } from '../config';
import { WinstonModule } from 'nest-winston';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CONFIG_MODULE_ROOT_IMPORT, //
    WinstonModule.forRootAsync(resolveAsyncConfig('winstonConfig')),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
