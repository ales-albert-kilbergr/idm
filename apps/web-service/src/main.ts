/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app/app.module';
import { IDMConfigService } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = await app.resolve<IDMConfigService>(ConfigService);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(config.get('PORT'));
  Logger.log(
    `🚀 Application is running on: http://localhost:${config.get(
      'PORT'
    )}/${globalPrefix}`
  );
}

bootstrap();
