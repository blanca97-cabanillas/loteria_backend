import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    PrimaryColumn
} from 'typeorm'
import {
    IsEmail
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Boleto1 } from './boleto_1.entity';

export type StatusType = "ESPERA" | "PAGADA";
@Entity()
export class Compra1 {
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

    @OneToMany(() => Boleto1, (boleto) => boleto.compra ,{eager:true, cascade: ['insert', 'update'] })
    boleto: Boleto1[];

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
	createdAt: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
	updatedAt: Date;
}
