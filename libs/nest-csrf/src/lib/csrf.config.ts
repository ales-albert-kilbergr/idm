import {
  Exclude,
  Expose,
  plainToInstance
} from 'class-transformer';
import * as Tokens from 'csrf';
import { CookieOptions } from 'express';

@Exclude()
export class CsrfConfig {
  public static DEFAULT_SECRET_COOKIE_NAME = 'csrf-secret-key';

  public static DEFAULT_SAME_SITE_POLICY: CookieOptions['sameSite'] = 'strict';

  public static DEFAULT_SET_TOKEN_HEADER_NAME = 'x-set-csrf-token';

  public static DEFAULT_CSRF_TOKEN_HEADER_NAME = 'x-csrf-token';

  @Expose()
  public maxAge?: number;
  /**
   * The string length of the salt (default: 8)
   */
  @Expose()
  public saltLength?: Tokens.Options['saltLength'];
  /**
   * The byte length of the secret key (default: 18)
   */
  @Expose()
  public secretLength?: Tokens.Options['secretLength'];

  @Expose()
  public secretCookieName = CsrfConfig.DEFAULT_SECRET_COOKIE_NAME;

  @Expose()
  public sameSite: CookieOptions['sameSite'] =
    CsrfConfig.DEFAULT_SAME_SITE_POLICY;

  @Expose()
  public signedCookie?: boolean;

  @Expose()
  public enforceHttps?: boolean;

  @Expose()
  public setTokenHeaderName: string = CsrfConfig.DEFAULT_SET_TOKEN_HEADER_NAME;

  @Expose()
  public tokenHeaderName = CsrfConfig.DEFAULT_CSRF_TOKEN_HEADER_NAME;

  public static create(configLike: Partial<CsrfConfig>) {
    const instance = plainToInstance(CsrfConfig, configLike, {
      exposeDefaultValues: true,
    });

    return Object.seal(instance);
  }
}
