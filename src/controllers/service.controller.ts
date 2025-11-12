// src/controllers/ServiceController.ts

import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { Service } from "../entities/Service";

export class ServiceController{

    static async privateDetails(req: Request, res: Response){
        
        const repo = AppDataSource.getRepository(Service);

        // Opción mejorada: Cargar la relación 'paymentPeriod' junto con el servicio.
        const service = await repo.find({
            relations: ['paymentPeriod'] 
        });

        return res.json({message: "obtencion de datos exitosa", service})
    }
}