import { UseInterceptors } from '@nestjs/common';
import { VerifyCsrfTokenInterceptor } from './verify-csrf-token.interceptor';

export function VerifyCsrfToken(): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    UseInterceptors(VerifyCsrfTokenInterceptor)(
      target,
      propertyKey,
      descriptor
    );
  };
}
