import {
  DynamicModule,
  Global,
  Module
} from '@nestjs/common';
import {
  IPublicRestApiConfigAsyncOptions,
  PublicRestApiConfigModule
} from './config';
import { SigninRestApiModule } from './signin';
import { SignupRestApiModule } from './signup';

@Global()
@Module({
  controllers: [],
  providers: [],
  exports: [],
})
export class PublicRestApiModule {
  public static forRootAsync(
    asyncOptions: IPublicRestApiConfigAsyncOptions
  ): DynamicModule {
    return {
      module: PublicRestApiModule,
      imports: [
        PublicRestApiConfigModule.forRootAsync(asyncOptions), //
        SignupRestApiModule,
        SigninRestApiModule,
      ],
    };
  }
}
