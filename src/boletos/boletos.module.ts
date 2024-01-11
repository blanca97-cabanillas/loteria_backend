import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoletosService } from './boletos.service';
import { BoletosController } from './boletos.controller';
import { Boleto1 } from 'src/entities/boleto_1.entity';
import { Boleto2 } from 'src/entities/boleto_2.entity';
import { Boleto3 } from 'src/entities/boleto_3.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Boleto1,Boleto2,Boleto3])],
    providers: [BoletosService],
    controllers: [BoletosController],
    exports: [BoletosService]
})
export class BoletosModule { }