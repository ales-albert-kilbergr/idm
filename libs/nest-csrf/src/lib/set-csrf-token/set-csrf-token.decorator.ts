import { UseInterceptors } from '@nestjs/common';
import { SetCsrfTokenInterceptor } from './set-csrf-token.interceptor';

export function SetCsrfToken(): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    UseInterceptors(SetCsrfTokenInterceptor)(target, propertyKey, descriptor);
  };
}
