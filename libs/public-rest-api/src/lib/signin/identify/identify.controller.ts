import {
  Controller,
  Post,
  Version
} from '@nestjs/common';

@Controller()
export class SigninIdentifyController {
  @Version('1')
  @Post('signin/identify')
  public resolveV1() {
    return { ok: 'ok' };
  }
}
