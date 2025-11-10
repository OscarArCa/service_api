// src/entities/Member.ts

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('members')
export class Member {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'int' })
    service_id!: number;

    @Column({ type: 'int' })
    user_id!: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    manual_amount!: number | null;

    @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
    percentage!: number | null;

    @CreateDateColumn({ type: 'timestamp' })
    created_at!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at!: Date;
    
}
