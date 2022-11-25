import {
  CsrfExceptionFilter,
  SetCsrfToken,
  VerifyCsrfToken
} from '@idm/nest-csrf';
import {
  Controller,
  Post,
  UseFilters,
  Version
} from '@nestjs/common';

@Controller()
export class SingupVerifyController {
  @Post('signup/verify')
  @VerifyCsrfToken()
  @SetCsrfToken()
  @UseFilters(CsrfExceptionFilter)
  @Version('1')
  public resolve() {
    return { ok: 'ok' };
  }
}
