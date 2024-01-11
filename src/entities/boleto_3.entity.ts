import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    PrimaryColumn
} from 'typeorm'
import {
    IsEmail
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Compra3 } from './compra_3.entity'
@Entity()
export class Boleto3 {
    
    @ApiProperty({ type: String })
    @PrimaryColumn()
    numero: number

    @ManyToOne(()=> Compra3, (compra)=> compra.boleto,{ onDelete: 'CASCADE' })
	compra: Compra3;
}
