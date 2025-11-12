// src/entities/Service.ts

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { PaymentPeriods } from './PaymentPeriods'; // Asumiendo que esta entidad existe o se creará

@Entity('service') // Corregido: Mapea a la tabla `service`
export class Service {

    @PrimaryGeneratedColumn()
    id!: number;
    
    // --- Relaciones de Clave Foránea (FK) ---
    
    // 1. Relación con PaymentPeriods (payment_period_id_fk)
    @Column({ name: 'payment_period_id_fk', type: 'int', nullable: true })
    paymentPeriodIdFk!: number | null;

    @ManyToOne(() => PaymentPeriods)
    @JoinColumn({ name: 'payment_period_id_fk' }) // Especifica la columna FK en esta entidad
    paymentPeriod!: PaymentPeriods; // Propiedad para cargar la relación
    
    // --- Columnas de Datos ---

    @Column({ type: 'varchar', length: 255 })
    name!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    description!: string | null; // DDL permite NULL

    @Column({ type: 'int' })
    type!: number; // Tipo de servicio (no hay columna 'nature' en el DDL)

    @Column({ type: 'double', default: 0 }) // Usamos 'double' para reflejar el DDL 'DOUBLE'
    amount!: number;

    @Column({ name: 'expiry_date', type: 'date', nullable: true }) // DDL: fech_v
    expiry_date!: Date | null;

    @Column({ type: 'int', default: 0 }) // DDL: visibilidad
    visibility!: number;

    @Column({ nullable: true, type: 'varchar', length: 255 })
    logo!: string | null;

    @Column({ type: 'int' })
    distribution!: number;

    // --- Marcas de Tiempo ---

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    created_at!: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updated_at!: Date;
    
    // NOTA: La columna 'creator_id' de tu borrador original no existe en la tabla MySQL final.
}

