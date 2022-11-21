import {
  Controller,
  Get
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { IIDConfig } from '../config';

@Controller()
export class IDMRootController {
  constructor(private config: ConfigService<IIDConfig>) {}

  @Get('/')
  @ApiExcludeEndpoint(true)
  public resolve() {
    return {
      name: this.config.get('app').name,
      version: this.config.get('app').version,
    };
  }
}
