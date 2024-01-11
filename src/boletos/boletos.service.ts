import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';

import { Boleto1 } from 'src/entities/boleto_1.entity';
import { Boleto3 } from 'src/entities/boleto_3.entity';
import { Boleto2 } from 'src/entities/boleto_2.entity';


@Injectable()
export class BoletosService {
  constructor(
    @InjectRepository(Boleto1)
    private boletoRepository1: Repository<Boleto1>,
    @InjectRepository(Boleto2)
    private boletoRepository2: Repository<Boleto2>,
    @InjectRepository(Boleto3)
    private boletoRepository3: Repository<Boleto3>
  ) { }

  getBoletos1(limitTop: number, limitBot: number): Promise<Boleto1[]> {
    return this.boletoRepository1.findBy({
      numero: LessThanOrEqual(limitTop) || MoreThanOrEqual(limitBot)
    });
  }
  getBoletos2(limitTop: number, limitBot: number): Promise<Boleto1[]> {
    return this.boletoRepository2.findBy({
      numero: LessThanOrEqual(limitTop) || MoreThanOrEqual(limitBot)
    });
  }
  getBoletos3(limitTop: number, limitBot: number): Promise<Boleto1[]> {
    return this.boletoRepository3.findBy({
      numero: LessThanOrEqual(limitTop) || MoreThanOrEqual(limitBot)
    });
  }
}
