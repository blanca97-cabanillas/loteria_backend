import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm'
import {
    IsEmail,
    IsString,
    MaxLength,
    MinLength,
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ApiProperty({ type: String })
    @Column({ length: 50, unique: true, nullable: true })
    username: string

    @ApiProperty({ type: String })
    @Column({ length: 500, nullable: true })
    @IsString()
    @MinLength(8)
    @MaxLength(16)
    password: string

    @ApiProperty({ type: String })
    @Column({ length: 500, nullable: true })
    @IsString()
    @MinLength(8)
    @MaxLength(16)
    name: string

    @ApiProperty({ type: String })
    @Column({ length: 500, nullable: true })
    @IsString()
    role: string;

    @ApiProperty({ type: String })
    @Column({ length: 500, unique: true })
    @IsEmail()
    email: string
}
