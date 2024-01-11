import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Like, Repository } from 'typeorm';
import { Compra1 } from 'src/entities/compra_1.entity';
import { Compra2 } from 'src/entities/compra_2.entity';
import { Compra3 } from 'src/entities/compra_3.entity';

interface ComprasPaginadas {
  compras;
  count;
}
@Injectable()
export class CompraService {
  constructor(
    @InjectRepository(Compra1)
    private compraRepository1: Repository<Compra1>,
    @InjectRepository(Compra2)
    private compraRepository2: Repository<Compra2>,
    @InjectRepository(Compra3)
    private compraRepository3: Repository<Compra3>
  ) { }

  findAll(): Promise<Compra1[]> {
    return this.compraRepository1.find();
  }
  getAllWithStatus(status: any): Promise<Compra1[]> {
    return this.compraRepository1.findBy({ status: status });
  }
  async getPaginatedRifa1(status: any, keyword: string, take: number, skip: number): Promise<any> {
    let data;
    const count = await this.compraRepository1.count();
    if (keyword?.length > 0) {
      data = await this.compraRepository1.findAndCount({
        where: [
          { status: status, nombre_persona: Like('%' + keyword + '%') },
          { status: status, email_persona: Like('%' + keyword + '%') },
          { status: status, telefono_persona: Like('%' + keyword + '%') },
          { status: status, folio: Like('%' + keyword + '%') },
        ],
        take: take,
        skip: skip
      });
    } else {
      data = await this.compraRepository1.findAndCount({
        where: [
          { status: status },
        ],
        take: take,
        skip: skip
      });
    }
    const pages = Math.trunc(count / take) + 1;
    return { data: data[0], count: count, pages: pages };
  }
  async getPaginatedRifa2(status: any, keyword: string, take: number, skip: number): Promise<any> {
    let data;
    const count = await this.compraRepository2.count();
    if (keyword?.length > 0) {
      data = await this.compraRepository2.findAndCount({
        where: [
          { status: status, nombre_persona: Like('%' + keyword + '%') },
          { status: status, email_persona: Like('%' + keyword + '%') },
          { status: status, telefono_persona: Like('%' + keyword + '%') },
          { status: status, folio: Like('%' + keyword + '%') },
        ],
        take: take,
        skip: skip
      });
    } else {
      data = await this.compraRepository2.findAndCount({
        where: [
          { status: status },
        ],
        take: take,
        skip: skip
      });
    }
    const pages = Math.trunc(count / take) + 1;
    return { data: data[0], count: count, pages: pages };
  }
  async getPaginatedRifa3(status: any, keyword: string, take: number, skip: number): Promise<any> {
    let data;
    const count = await this.compraRepository3.count();
    if (keyword?.length > 0) {
      data = await this.compraRepository3.findAndCount({
        where: [
          { status: status, nombre_persona: Like('%' + keyword + '%') },
          { status: status, email_persona: Like('%' + keyword + '%') },
          { status: status, telefono_persona: Like('%' + keyword + '%') },
          { status: status, folio: Like('%' + keyword + '%') },
        ],
        take: take,
        skip: skip
      });
    } else {
      data = await this.compraRepository3.findAndCount({
        where: [
          { status: status },
        ],
        take: take,
        skip: skip
      });
    }
    const pages = Math.trunc(count / take) + 1;
    return { data: data[0], count: count, pages: pages };
  }
  // Add 3 rifas repositories
  async createCompraRifa1(compra: Compra1): Promise<any> {
    return this.compraRepository1.save(compra);
  }
  async createCompraRifa2(compra: Compra2): Promise<any> {
    return this.compraRepository2.save(compra);
  }
  async createCompraRifa3(compra: Compra3): Promise<any> {
    return this.compraRepository3.save(compra);
  }

  async updateCompra1(body) {
    const compra = await this.compraRepository1.findOne({ where: { folio: body.folio } });
    const compraUpdate = Object.assign(compra, body);
    return await this.compraRepository1.save(compraUpdate);
  }
  async updateCompra2(body) {
    const compra = await this.compraRepository2.findOne({ where: { folio: body.folio } });
    const compraUpdate = Object.assign(compra, body);
    return await this.compraRepository2.save(compraUpdate);
  }
  async updateCompra3(body) {
    const compra = await this.compraRepository3.findOne({ where: { folio: body.folio } });
    const compraUpdate = Object.assign(compra, body);
    return await this.compraRepository3.save(compraUpdate);
  }

  async deleteCompra1(body) {
    return await this.compraRepository1.delete({ folio: body.folio });
  }
  async deleteCompra2(body) {
    return await this.compraRepository2.delete({ folio: body.folio });
  }
  async deleteCompra3(body) {
    return await this.compraRepository3.delete({ folio: body.folio });
  }
  async getCompra(body): Promise<any> {
    console.log(body);
    if(body.identificador === 'rifa_01'){
      return await this.compraRepository1.findOne({ where: { folio: body.folio } });
    }
    if(body.identificador === 'rifa_02'){
      return await this.compraRepository2.findOne({ where: { folio: body.folio } });
    }
    if(body.identificador === 'rifa_03'){
      return await this.compraRepository3.findOne({ where: { folio: body.folio } });
    }
    
  }

}
