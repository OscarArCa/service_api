// src/entities/User.ts

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Location } from './Location'; // Asumiendo que crearás o ya tienes la entidad Location

@Entity('User') // Aseguramos que el nombre coincida con la tabla MySQL
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    // --- Relaciones de Clave Foránea (FK) ---
    
    // 1. Relación con Location (location_id_fk)
    @Column({ name: 'location_id_fk', type: 'int', nullable: true })
    locationIdFk!: number | null;

    @ManyToOne(() => Location)
    @JoinColumn({ name: 'location_id_fk' }) // Especifica la columna FK en esta entidad
    location!: Location;

    // --- Columnas de Datos Personales ---

    @Column({ type: 'varchar', length: 255 }) // El DDL era 255
    first_names!: string; // Renombrado de 'first_name' a 'first_names' (DDL: nombres)

    @Column({ type: 'varchar', length: 255 }) // El DDL era 255
    last_names!: string; // Renombrado de 'last_name' a 'last_names' (DDL: apellidos)

    @Column({ type: 'varchar', length: 255, unique: true }) // El DDL era 255
    email!: string;

    @Column({ type: 'int', default: 2 })
    role!: number;

    @Column({ name: 'status', type: 'int', default: 1 }) // Nombre de columna: status (DDL)
    status!: number; // Tipo de TS/JS (DDL: estado, int)

    @Column({ type: 'varchar', length: 20, unique: true, nullable: true })
    dni!: string | null;

    @Column({ name: 'phone_number', type: 'varchar', length: 20, nullable: true }) // Nombre de columna: phone_number (DDL)
    phone_number!: string | null; // (DDL: celular)

    @Column({ name: 'birth_date', type: 'date', nullable: true })
    birth_date!: Date | null;

    // --- Columna de Contraseña ---
    // Usamos 'password' para que coincida con la DB, pero con un nombre de propiedad más descriptivo en TS
    @Column({ name: 'password', type: 'varchar', length: 255, nullable: false }) 
    password_hash!: string; // Lo marcamos como NOT NULL en el DDL, por lo que no es 'null' en TS.

    // --- Marcas de Tiempo ---

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    created_at!: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updated_at!: Date;
}