import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from 'typeorm'
import {
    IsEmail
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Boleto2 } from './boleto_2.entity';

export type StatusType = "ESPERA" | "PAGADA";
@Entity()
export class Compra2 {
    @PrimaryGeneratedColumn('increment')
    folio: string
    
    @ApiProperty({ type: String })
    @Column({ length: 50, nullable: true })
    nombre_persona: string

    @ApiProperty({ type: String })
    @Column({ length: 500, nullable:true })
    @IsEmail()
    email_persona: string

    @ApiProperty({ type: String })
    @Column({ length: 50, nullable: true })
    telefono_persona: string

    @Column({
		type: "enum",
		enum: ["ESPERA", "PAGADA"]
	})
	status: StatusType;

    @OneToMany(() => Boleto2, (boleto) => boleto.compra ,{eager:true, cascade: ['insert', 'update'] })
    boleto: Boleto2[];

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
	createdAt: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
	updatedAt: Date;
}
