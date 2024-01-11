import { Controller, Query, Get, Post, Body } from '@nestjs/common';
import { ConfiguracionService } from './configuracion.service';
@Controller('configuracion')
export class ConfiguracionController {
  constructor(private ConfiguracionService: ConfiguracionService) { }

  @Get('get-config')
  checkAvailability(@Query('identificador') identificador: string): Promise<any> {
    return this.ConfiguracionService.getConfig(identificador);
  }
  @Get('get-all')
  getAll(): Promise<any> {
    return this.ConfiguracionService.getAll();
  }
  @Post('update')
  create(@Body() body: any) {
    return this.ConfiguracionService.update(body);
  }

}
