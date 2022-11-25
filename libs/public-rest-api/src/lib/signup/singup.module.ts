import { Module } from '@nestjs/common';
import { SignupIdentifyController } from './identify';
import { SingupVerifyController } from './verify';
import {
  PublicRestApiConfig,
  PublicRestApiConfigModule
} from '../config';

@Module({
  imports: [PublicRestApiConfigModule],
  controllers: [
    SignupIdentifyController, //
    SingupVerifyController,
  ],
})
export class SignupRestApiModule {
  constructor(private readonly config: PublicRestApiConfig) {}
}
