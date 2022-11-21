import { Module } from '@nestjs/common';
import {
  PublicRestApiConfig,
  PublicRestApiConfigModule
} from '../config';

@Module({
  imports: [PublicRestApiConfigModule],
})
export class SignupRestApiModule {
  constructor(private readonly config: PublicRestApiConfig) {}
}
