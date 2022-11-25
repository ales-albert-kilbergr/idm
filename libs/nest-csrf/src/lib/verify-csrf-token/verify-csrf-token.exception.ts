export enum VerifyCsrfTokenErrorCode {
  MISSING_CSRF_SECRET = 'MISSING_CSRF_SECRET',
  INVALID_CSRF_TOKEN = 'INVALID_CSFR_TOKEN',
}
import {
  anonymize,
  colorizeUrl
} from '@idm/node-logger-utils';

export class VerifyCsrfTokenException extends Error {
  constructor(
    public readonly code: VerifyCsrfTokenErrorCode,
    public readonly reason: string,
    public readonly origError?: Error
  ) {
    super(`[${VerifyCsrfTokenException.name}.${code}] ${reason}`);
  }

  public static MissingCsrfSecret() {
    return new VerifyCsrfTokenException(
      VerifyCsrfTokenErrorCode.MISSING_CSRF_SECRET,
      'Csrf token could not be verified, there hadn`t been found any Csrf secret'
    );
  }

  public static InvalidCsrfToken(csrfToken: string, path: string) {
    return new VerifyCsrfTokenException(
      VerifyCsrfTokenErrorCode.INVALID_CSRF_TOKEN,
      `Csrf token "${anonymize(csrfToken)}" ` +
        `does not match given secret! (${colorizeUrl(path)})`
    );
  }
}
