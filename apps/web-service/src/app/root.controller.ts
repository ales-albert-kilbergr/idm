import {
  Controller,
  Get
} from '@nestjs/common';

@Controller()
export class IDMRootController {
  @Get('/')
  public resolve() {
    return {
      name: 'Identity management',
      // Dummy value before we solve versionning per app
      version: '1.1.1',
    };
  }
}
