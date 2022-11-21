import {
  Exclude,
  plainToInstance
} from 'class-transformer';

@Exclude()
export class PublicRestApiConfig {
  public static async create(
    configLike: Partial<PublicRestApiConfig>
  ): Promise<PublicRestApiConfig> {
    const instance = plainToInstance(PublicRestApiConfig, configLike);

    return instance;
  }
}
