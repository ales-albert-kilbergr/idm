import { Injectable } from '@nestjs/common';
import * as Tokens from 'csrf';
import * as express from 'express';
import { CsrfConfig } from './csrf.config';

@Injectable()
export class CsrfService {
  public readonly tokens = new Tokens({
    saltLength: this.config.saltLength,
    secretLength: this.config.secretLength,
  });

  constructor(public readonly config: CsrfConfig) {}

  public readCsrfSecret(request: express.Request) {
    const cookieName = this.config.secretCookieName;

    if (this.config.signedCookie) {
      return request.signedCookies[cookieName];
    } else {
      return request.cookies[cookieName];
    }
  }

  public createCsrfSecret(): Promise<string> {
    return this.tokens.secret();
  }

  public createCsrfToken(csrfSecret: string): string {
    return this.tokens.create(csrfSecret);
  }

  public verify(csrfSecret: string, csrfToken: string) {
    return this.tokens.verify(csrfSecret, csrfToken);
  }
}
