import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  HttpStatus,
  InternalServerErrorException,
  Logger
} from '@nestjs/common';
import * as express from 'express';
import { SetCsrfTokenException } from './set-csrf-token/set-csrf-token.exception';
import { VerifyCsrfTokenException } from './verify-csrf-token';

@Catch(SetCsrfTokenException, VerifyCsrfTokenException)
export class CsrfExceptionFilter implements ExceptionFilter {
  public logger = new Logger(CsrfExceptionFilter.name);

  public catch(
    exception: SetCsrfTokenException | VerifyCsrfTokenException,
    host: ArgumentsHost
  ) {
    const context = host.switchToHttp();
    const response = context.getResponse<express.Response>();
    const request = context.getRequest<express.Request>();

    this.logger.warn(exception);

    if (exception instanceof VerifyCsrfTokenException) {
      response.status(HttpStatus.FORBIDDEN).json({
        statusCode: HttpStatus.FORBIDDEN,
        message: 'Invalid csfr.',
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    } else if (exception instanceof SetCsrfTokenException) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Something went wrong about csfr.',
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    } else {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal server error.',
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }
}
