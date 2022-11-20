import { Module } from '@nestjs/common';
import { CONFIG_MODULE_ROOT_IMPORT } from '../config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CONFIG_MODULE_ROOT_IMPORT],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
