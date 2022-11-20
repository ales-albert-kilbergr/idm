import {
  Controller,
  Get
} from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckService
} from '@nestjs/terminus';

@Controller('/health')
export class HealthCheckController {
  constructor(private health: HealthCheckService) {}

  @Get()
  @HealthCheck()
  @ApiExcludeEndpoint(true)
  public resolve() {
    return this.health.check([]);
  }
}
