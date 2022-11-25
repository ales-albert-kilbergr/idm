export enum SetCsrfTokenErrorCode {
  MISSING_CSRF_SECRET = 'MISSING_CSRF_SECRET',
}

export class SetCsrfTokenException extends Error {
  constructor(
    public readonly code: SetCsrfTokenErrorCode,
    public readonly reason: string,
    public readonly origError?: Error
  ) {
    super(`[${SetCsrfTokenException.name}.${code}] ${reason}`);
  }

  public static MissingCsrfSecret() {
    return new SetCsrfTokenException(
      SetCsrfTokenErrorCode.MISSING_CSRF_SECRET,
      'Csrf token could not be created, there hadn`t been found any Csrf secret'
    );
  }
}
