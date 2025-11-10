// src/entities/User.ts

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 200 })
    first_name!: string;

    @Column({ type: 'varchar', length: 200 })
    last_name!: string;

    @Column({ type: 'varchar', length: 200, unique: true })
    email!: string;

    @Column({ type: 'int', default: 2 })
    role!: number;

    @Column({ type: 'tinyint', default: 1 })
    is_active!: boolean;

    @Column({ type: 'varchar', length: 13, unique: true, nullable: true })
    dni!: string | null;

    @Column({ type: 'varchar', length: 15, nullable: true })
    phone!: string | null;

    @Column({ type: 'date', nullable: true })
    birth_date!: Date | null;

    @CreateDateColumn({ type: 'timestamp' })
    created_at!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at!: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    password_hash!: string | null;
}