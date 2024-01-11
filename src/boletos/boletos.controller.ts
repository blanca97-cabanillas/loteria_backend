import { Controller, Query, Get } from '@nestjs/common';
import { BoletosService } from './boletos.service';

@Controller('boletos')
export class BoletosController {
  constructor(private boletosService: BoletosService) { }

  @Get('get-boletos-rifa-1')
  getBoletos1(@Query('limitTop') limitTop: number,@Query('limitBot') limitBot: number,): Promise<any> {
    return this.boletosService.getBoletos1(limitTop, limitBot);
  }
  @Get('get-boletos-rifa-2')
  getBoletos2(@Query('limitTop') limitTop: number,@Query('limitBot') limitBot: number,): Promise<any> {
    return this.boletosService.getBoletos2(limitTop, limitBot);
  }
  @Get('get-boletos-rifa-3')
  getBoletos3(@Query('limitTop') limitTop: number,@Query('limitBot') limitBot: number,): Promise<any> {
    return this.boletosService.getBoletos3(limitTop, limitBot);
  }
}
