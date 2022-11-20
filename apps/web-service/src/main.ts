/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { colorizeUrl } from '@idm/node-logger-utils';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerModule
} from '@nestjs/swagger';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AppModule } from './app/app.module';
import { IDMConfigService } from './config';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  const config = await app.resolve<IDMConfigService>(ConfigService);
  // Inject custom logger library, which handle Dev/Prod logging
  // differently. The `WINSTON_LOGGER_PROVIDER` configures logger transports,
  // where app logs are stored.
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  // Setup swagger generated API
  SwaggerModule.setup(
    'doc',
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder().setTitle('IDM web service').build()
    )
  );

  await app.listen(config.get('PORT'));
  logger.log(
    `Application is running on: ` +
      colorizeUrl(`http://localhost:${config.get('PORT')}`)
  );
}

bootstrap();
