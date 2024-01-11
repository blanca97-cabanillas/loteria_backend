import { Controller, Query, Get, Post, Body } from '@nestjs/common';
import { CompraService } from './compra.service';
import { Compra1 } from 'src/entities/compra_1.entity';
import { Compra2 } from 'src/entities/compra_2.entity';
import { Compra3 } from 'src/entities/compra_3.entity';
@Controller('compra')
export class CompraController {
  constructor(private compraService: CompraService) { }

  @Get('get-all-compras-rifa-1')
  checkAvailability(@Query('status') status: string): Promise<any> {
    return this.compraService.getAllWithStatus(status);
  }
  @Get('get-paginated-rifa-1')
  getPaginatedRifa1(@Query('status') status: string, @Query('skip') skip: number, @Query('take') take: number, @Query('keyword') keyword: string): Promise<any> {
    return this.compraService.getPaginatedRifa1(status, keyword, take, skip);
  }
  @Get('get-paginated-rifa-2')
  getPaginatedRifa2(@Query('status') status: string, @Query('skip') skip: number, @Query('take') take: number, @Query('keyword') keyword: string): Promise<any> {
    return this.compraService.getPaginatedRifa2(status, keyword, take, skip);
  }
  @Get('get-paginated-rifa-3')
  getPaginatedRifa3(@Query('status') status: string, @Query('skip') skip: number, @Query('take') take: number, @Query('keyword') keyword: string): Promise<any> {
    return this.compraService.getPaginatedRifa3(status, keyword, take, skip);
  }

  // Servicios para agregar las compras a cada rifa
  @Post('add-compra-rifa-1')
  createOneCompraRifa1(@Body() body: {}): Promise<any> {
    console.log(body);
    return this.compraService.createCompraRifa1(body as Compra1);
  }
  @Post('add-compra-rifa-2')
  createOneCompraRifa2(@Body() body: {}): Promise<any> {
    console.log(body);
    return this.compraService.createCompraRifa2(body as Compra2);
  }
  @Post('add-compra-rifa-3')
  createOneCompraRifa3(@Body() body: {}): Promise<any> {
    console.log(body);
    return this.compraService.createCompraRifa3(body as Compra3);
  }

  // Servicios para editar el boleto
  @Post('update-compra-rifa-1')
  updateRifa1(@Body() body: any) {
    return this.compraService.updateCompra1(body);
  }
  @Post('update-compra-rifa-2')
  updateRifa2(@Body() body: any) {
    return this.compraService.updateCompra2(body);
  }
  @Post('update-compra-rifa-3')
  updateRifa3(@Body() body: any) {
    return this.compraService.updateCompra3(body);
  }
  @Post('delete-compra-rifa-1')
  deleteCompra1(@Body() body: any) {
    return this.compraService.deleteCompra1(body);
  }
  @Post('delete-compra-rifa-2')
  deleteCompra2(@Body() body: any) {
    return this.compraService.deleteCompra2(body);
  }
  @Post('delete-compra-rifa-3')
  deleteCompra3(@Body() body: any) {
    return this.compraService.deleteCompra3(body);
  }
  @Get('get-compra-rifa')
  getCompra(@Query('identificador') identificador: string, @Query('folio') folio: number): Promise<any> {
    console.log(identificador);
    return this.compraService.getCompra({ identificador, folio });
  }
}
