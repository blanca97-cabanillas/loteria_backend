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
import { Compra2 } from './compra_2.entity'
@Entity()
export class Boleto2 {
    
    @ApiProperty({ type: String })
    @PrimaryColumn()
    numero: number

    @ManyToOne(()=> Compra2, (compra)=> compra.boleto,{ onDelete: 'CASCADE' })
	compra: Compra2;
}
