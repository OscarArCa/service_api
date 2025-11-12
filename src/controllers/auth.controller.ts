import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { User } from "../entities/User";

export class AuthController{
    static login = async (req: Request, res: Response) => {
        const { email, password} = req.body;
        const repo = AppDataSource.getRepository(User);
        const user = await repo.findOneBy({email});

        if(!user){
            // Usamos 401 para credenciales incorrectas, que es más apropiado que 400
            return res.status(401).json({ message:"El usuario no existe" });
        }
        
        // El nombre de la propiedad en la entidad es 'password_hash'
        if(user.password_hash !== password){ 
            return res.status(401).json({ message:"La contraseña es incorrecta" });
        }

        // 1. CAMBIO MÍNIMO: Omitir el hash en la respuesta por seguridad.
        const userResponse = { ...user, password_hash: undefined };

        return res.json({message: "Inicio exitoso", user: userResponse});
    }

    static register = async (req: Request, res: Response) => {
        const repo = AppDataSource.getRepository(User);
        
        // 1. CAMBIO MÍNIMO: Asegurar que el password se mapee a la propiedad correcta.
        // La entidad TS espera los campos como first_names, last_names, phone_number, etc.
        // y la contraseña debe asignarse a 'password_hash'.
        
        const { password, ...userData } = req.body;
        
        const dataToSave = {
            ...userData,
            password_hash: password // Asigna la contraseña del cuerpo al campo correcto de la entidad
        };
        
        const data = repo.create(dataToSave);
        const saved = await repo.save(data);
        
        // 2. CAMBIO MÍNIMO: Omitir el hash en la respuesta por seguridad.
        const userResponse = { ...saved, password_hash: undefined };

        return res.status(201).json({ // Usamos 201 para registro exitoso
            message: "Registro exitoso",
            user: userResponse
        });
    }
}