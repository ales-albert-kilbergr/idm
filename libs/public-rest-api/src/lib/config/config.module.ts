import {
  DynamicModule,
  FactoryProvider,
  Global,
  Module,
  ModuleMetadata
} from '@nestjs/common';
import { PublicRestApiConfig } from './config';
import {} from 'class-validator';

export interface IPublicRestApiConfigAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (...args) => Promise<PublicRestApiConfig>;
  inject?: FactoryProvider['inject'];
}

@Global()
@Module({})
class PublicRestApiConfigCoreModule {
  public static forRootAsync(
    asyncOptions: IPublicRestApiConfigAsyncOptions
  ): DynamicModule {
    return {
      module: PublicRestApiConfigCoreModule,
      imports: [...(asyncOptions.imports || [])],
      providers: [
        {
          provide: PublicRestApiConfig,
          useFactory: async (...deps) =>
            PublicRestApiConfig.create(await asyncOptions.useFactory(...deps)),
          inject: asyncOptions.inject,
        },
      ],
      exports: [PublicRestApiConfig],
    };
  }
}

@Module({})
export class PublicRestApiConfigModule {
  public static forRootAsync(
    asyncOptions: IPublicRestApiConfigAsyncOptions
  ): DynamicModule {
    return {
      module: PublicRestApiConfigModule,
      imports: [PublicRestApiConfigCoreModule.forRootAsync(asyncOptions)],
    };
  }
}
