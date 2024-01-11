import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class Configuracion {
    @PrimaryGeneratedColumn('increment')
    id: string

    @ApiProperty({ type: String })
    @Column({ length: 200, nullable: true })
    identificador: string

    @ApiProperty({ type: String })
    @Column({ length: 200, nullable: true })
    nombre_rifa: string

    @ApiProperty({ type: Number })
    @Column({ nullable: true })
    numero_boletos: number

    @ApiProperty({ type: Number })
    @Column({ nullable: true })
    precio_boleto: number

    @ApiProperty({ type: Boolean })
    @Column({ nullable: true })
    activa: boolean

    @ApiProperty({ type: String })
    @Column({ nullable: true, length: 2000 })
    foto: string

}
