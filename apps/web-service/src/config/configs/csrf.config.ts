import { CsrfConfig } from '@idm/nest-csrf';
import { registerAs } from '@nestjs/config';

export const csrfConfig = registerAs('csrf', () => {
  return {
    signedCookie: true,
  } as CsrfConfig;
});
