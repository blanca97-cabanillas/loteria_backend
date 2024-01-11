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
import { Compra1 } from './compra_1.entity'
@Entity()
export class Boleto1 {
    
    @ApiProperty({ type: String })
    @PrimaryColumn()
    numero: number

    @ManyToOne(()=> Compra1, (compra)=> compra.boleto, { onDelete: 'CASCADE' })
	compra: Compra1;
}
