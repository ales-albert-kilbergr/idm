import {
  SetMetadata,
  UseInterceptors
} from '@nestjs/common';
import { SetCsrfCookieSecretInterceptor } from './csrf-cookie-secret.interceptor';
import {
  CSRF_COOKIE_SECRET_METADATA_KEY,
  ISetCsrfCookieSecretMetadata
} from './csrf-cookie-secret.metadata';

export function SetCsrfCookieSecret(
  options: ISetCsrfCookieSecretMetadata = {}
): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    SetMetadata(CSRF_COOKIE_SECRET_METADATA_KEY, options)(
      target,
      propertyKey,
      descriptor
    );
    UseInterceptors(SetCsrfCookieSecretInterceptor)(
      target,
      propertyKey,
      descriptor
    );
  };
}
