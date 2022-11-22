import { colorizeUrl } from '@idm/node-logger-utils';
import {
  Logger,
  VersioningType
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerModule
} from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { IDMWebServiceModule } from './app/web-service.module';
import { IDMConfigService } from './config';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(IDMWebServiceModule, {
    // Do not buffer logs. If there were any timeouting problem during bootstrap
    // phase, we wouldn`t see any logs for few minutes. Typical example is
    // a connection timout to DB.
    bufferLogs: false,
  });

  // Enable api versioning by uri like [host]/v1/[path]
  // see https://docs.nestjs.com/techniques/versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });

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
      new DocumentBuilder().setTitle(config.get('app').name).build()
    )
  );

  // Enable cookie processor middleware
  // see https://docs.nestjs.com/techniques/cookies#use-with-express-default
  app.use(cookieParser(config.get('COOKIE_SECRET')));

  await app.listen(config.get('PORT'));
  logger.log(
    `Application is running on: ` +
      colorizeUrl(`http://localhost:${config.get('PORT')}`)
  );
}

bootstrap();
