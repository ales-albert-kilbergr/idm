import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import * as express from 'express';
import { Observable } from 'rxjs';
import { VerifyCsrfTokenException } from './verify-csrf-token.exception';
import { WithCsrfSecret } from '../csrf-cookie-secret';
import { CsrfService } from '../csrf.service';

@Injectable()
export class VerifyCsrfTokenInterceptor implements NestInterceptor {
  constructor(protected readonly csrf: CsrfService) {}

  public intercept(
    context: ExecutionContext,
    next: CallHandler<unknown>
  ): Observable<unknown> {
    const request = this.getRequest(context);
    const csrfToken = String(request.headers[this.csrf.config.tokenHeaderName]);
    const csrfSecret = this.csrf.readCsrfSecret(request);

    if (!csrfSecret) {
      throw VerifyCsrfTokenException.MissingCsrfSecret();
    }

    if (!this.csrf.verify(csrfSecret, csrfToken)) {
      throw VerifyCsrfTokenException.InvalidCsrfToken(
        csrfToken,
        request.originalUrl
      );
    }

    return next.handle();
  }

  protected getResponse(context: ExecutionContext): express.Response {
    return context.switchToHttp().getResponse();
  }

  protected getRequest(
    context: ExecutionContext
  ): express.Request & WithCsrfSecret {
    return context.switchToHttp().getRequest();
  }
}
