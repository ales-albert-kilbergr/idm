import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import * as express from 'express';
import { Observable } from 'rxjs';
import { SetCsrfTokenException } from './set-csrf-token.exception';
import { CsrfService } from '../csrf.service';

@Injectable()
export class SetCsrfTokenInterceptor implements NestInterceptor {
  constructor(protected readonly csrf: CsrfService) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<unknown>
  ): Observable<unknown> {
    const request = this.getRequest(context);
    const csrfSecret = this.csrf.readCsrfSecret(request);

    if (!csrfSecret) {
      throw SetCsrfTokenException.MissingCsrfSecret();
    }

    const response = this.getResponse(context);
    const csrfToken = this.csrf.createCsrfToken(csrfSecret);

    response.setHeader(this.csrf.config.setTokenHeaderName, csrfToken);

    return next.handle();
  }

  protected getResponse(context: ExecutionContext): express.Response {
    return context.switchToHttp().getResponse();
  }

  protected getRequest(context: ExecutionContext): express.Request {
    return context.switchToHttp().getRequest();
  }
}
