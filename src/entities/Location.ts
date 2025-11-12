// src/entities/Location.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './User'; // Importamos la entidad User para la relación

@Entity('location') // Mapea a la tabla `location`
export class Location {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    country!: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    region!: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    province!: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    district!: string | null;
    
    // --- Relación ---
    // Una Location puede tener muchos Users (location ||--o{ User)
    @OneToMany(() => User, user => user.location)
    users!: User[];
}