import { PublicRestApiConfig } from '@idm/public-rest-api';
import { registerAs } from '@nestjs/config';

export const publicRestApiConfig = registerAs('publicRestApi', () => {
  return {} as PublicRestApiConfig;
});
