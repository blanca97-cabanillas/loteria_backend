import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  ConfiguracionController } from './configuracion.controller';
import { ConfiguracionService } from './configuracion.service';
import { Configuracion } from 'src/entities/configuracion';


@Module({
    imports: [TypeOrmModule.forFeature([Configuracion])],
    providers: [ConfiguracionService],
    controllers: [ConfiguracionController],
    exports: [ConfiguracionService]
})
export class ConfiguracionModule { }