import {
  DynamicModule,
  FactoryProvider,
  Global,
  Module,
  ModuleMetadata
} from '@nestjs/common';
import { SetCsrfCookieSecretInterceptor } from './csrf-cookie-secret/csrf-cookie-secret.interceptor';
import { CsrfConfig } from './csrf.config';
import { CsrfService } from './csrf.service';
import { SetCsrfTokenInterceptor } from './set-csrf-token';

export interface INestCsrfConfigAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (...args) => Promise<CsrfConfig>;
  inject?: FactoryProvider['inject'];
}

@Global()
@Module({})
export class NestCsrfCoreModule {
  public static forRootAsync(
    asyncOptions: INestCsrfConfigAsyncOptions
  ): DynamicModule {
    return {
      module: NestCsrfCoreModule,
      imports: [...(asyncOptions.imports || [])],
      providers: [
        {
          provide: CsrfConfig,
          useFactory: async (...deps) =>
            CsrfConfig.create(await asyncOptions.useFactory(...deps)),
          inject: asyncOptions.inject,
        },
        SetCsrfCookieSecretInterceptor,
        SetCsrfTokenInterceptor,
        CsrfService,
      ],
      exports: [
        CsrfConfig,
        SetCsrfCookieSecretInterceptor,
        SetCsrfTokenInterceptor,
        CsrfService,
      ],
    };
  }
}

@Module({
  controllers: [],
  providers: [],
  exports: [],
})
export class NestCsrfModule {
  public static forRootAsync(
    asyncOptions: INestCsrfConfigAsyncOptions
  ): DynamicModule {
    return {
      module: NestCsrfModule,
      imports: [NestCsrfCoreModule.forRootAsync(asyncOptions)],
    };
  }
}
