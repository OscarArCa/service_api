// src/entities/Service.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('services')
export class Service {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ nullable: true })
    description!: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    amount!: number;

    @Column()
    type!: number;

    @Column({ nullable: true })
    logo!: string;

    @Column()
    nature!: number;

    @Column()
    distribution!: number;

    @Column()
    creator_id!: number;

    @CreateDateColumn({ type: 'timestamp' })
    created_at!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at!: Date;
}

