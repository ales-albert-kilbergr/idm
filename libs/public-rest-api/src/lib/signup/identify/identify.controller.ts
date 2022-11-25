import {
  CsrfExceptionFilter,
  SetCsrfCookieSecret
} from '@idm/nest-csrf';
import {
  Controller,
  Post,
  UseFilters,
  Version
} from '@nestjs/common';

@Controller()
export class SignupIdentifyController {
  @Version('1')
  @SetCsrfCookieSecret({
    path: 'v1/signup/*',
    forceRewrite: true,
  })
  @UseFilters(CsrfExceptionFilter)
  @Post('signup/identify')
  public resolveV1() {
    return { ok: 'ok' };
  }
}
