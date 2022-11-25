import { CookieOptions } from 'express';

export interface ISetCsrfCookieSecretMetadata {
  /**
   * Time to live in milliseconds
   */
  maxAge?: number;
  /**
   * Path for the cookie secret.
   */
  path?: string;

  sameSite?: CookieOptions['sameSite'];

  enforceHttps?: boolean;

  signedCookies?: boolean;

  name?: string;

  forceRewrite?: boolean;
}

export const CSRF_COOKIE_SECRET_METADATA_KEY = Symbol(
  'csrf_cookie_secret_metadata_key'
);
