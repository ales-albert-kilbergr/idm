import { registerAs } from '@nestjs/config';
import * as packageJson from '../../../package.json';

export interface IAppConfig {
  version: string;
  name: string;
}

export const appConfig = registerAs('app', () => {
  return {
    name: packageJson.name,
    version: packageJson.version,
  };
});
