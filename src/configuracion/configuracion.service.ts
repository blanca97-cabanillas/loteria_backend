import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Configuracion } from 'src/entities/configuracion';

@Injectable()
export class ConfiguracionService {
  constructor(
    @InjectRepository(Configuracion)
    private configuracionRepository: Repository<Configuracion>
  ) { }

  getConfig(identificador: string): Promise<Configuracion> {
    return this.configuracionRepository.findOne({ where: { identificador: identificador } });
  }
  getAll(): Promise<Configuracion[]> {
    console.log('entre aqui bro');
    return this.configuracionRepository.findBy({ activa: true });
  }
  async update(body) {
    const rifa = await this.configuracionRepository.findOne({where: { identificador: body.identificador }});
    const updatedRifa = Object.assign(rifa, body);
    return await this.configuracionRepository.save(updatedRifa);
  }
}
