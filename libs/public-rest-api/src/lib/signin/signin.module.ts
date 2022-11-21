import { Module } from '@nestjs/common';
import { SigninIdentifyController } from './identify';
import { PublicRestApiConfigModule } from '../config';

@Module({
  imports: [PublicRestApiConfigModule],
  controllers: [
    SigninIdentifyController, //
  ],
})
export class SigninRestApiModule {}
