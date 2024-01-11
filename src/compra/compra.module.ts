import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { User } from '../entities/user.entity';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { JwtService } from '@nestjs/jwt';
import { Compra1 } from 'src/entities/compra_1.entity';
import { Compra2 } from 'src/entities/compra_2.entity';
import { Compra3 } from 'src/entities/compra_3.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Compra1,Compra2,Compra3])],
    providers: [CompraService],
    controllers: [CompraController],
    exports: [CompraService]
})
export class CompraModule { }