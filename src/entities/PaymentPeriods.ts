// src/entities/PaymentPeriods.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('payment_periods') // Mapea a la tabla `payment_periods`
export class PaymentPeriods {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    name!: string | null;

    @Column({ type: 'int', nullable: true })
    days!: number | null;
}