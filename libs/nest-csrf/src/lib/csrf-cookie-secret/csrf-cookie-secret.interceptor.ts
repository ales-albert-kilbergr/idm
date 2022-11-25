import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import * as express from 'express';
import { Observable } from 'rxjs';
import { CSRF_COOKIE_SECRET_METADATA_KEY } from './csrf-cookie-secret.metadata';
import { CsrfService } from '../csrf.service';

export interface WithCsrfSecret {
  csrfSecret: string;
}

@Injectable()
export class SetCsrfCookieSecretInterceptor implements NestInterceptor {
  constructor(protected readonly csrf: CsrfService) {}

  public async intercept(
    context: ExecutionContext,
    next: CallHandler<unknown>
  ): Promise<Observable<unknown>> {
    const metadata = Reflect.getMetadata(
      CSRF_COOKIE_SECRET_METADATA_KEY,
      context.getHandler()
    );
    const request = this.getRequest(context);
    const response = this.getResponse(context);

    let csrfSecret = this.csrf.readCsrfSecret(request);

    if (!csrfSecret || metadata.forceRewrite) {
      const secret = await this.csrf.createCsrfSecret();

      response.cookie(this.csrf.config.secretCookieName, secret, {
        // Prevent javascript to access the otp via `documents.cookie`
        httpOnly: true,
        sameSite: metadata.sameSite || this.csrf.config.sameSite,
        // If set to true, then only disclose this cookie via https protocol
        secure: this.csrf.config.enforceHttps,
        // Sets when cookie will be deleted from browser in secconds starting
        // by now.
        maxAge: metadata.maxAge,
        signed: this.csrf.config.signedCookie,
        path: metadata.path,
      });
      csrfSecret = secret;
    }

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
