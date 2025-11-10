import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { Service } from "../entities/Service";

export class ServiceController{

    static async privateDetails(req: Request, res: Response){
        
        const repo = AppDataSource.getRepository(Service);

        const service = await repo.find();

        return res.json({message: "obtencion de datos exitosa",service})
    }
}