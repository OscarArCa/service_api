import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { User } from "../entities/User";

export class AuthController{
    static login = async (req: Request, res: Response) => {
        const { email, password} = req.body;
        const repo = AppDataSource.getRepository(User);
        const user = await repo.findOneBy({email});

        if(!user){
            return res.status(400).json({ message:"El user no existe" });
        }

        if(user.password_hash !== password){
            return res.status(400).json({ message:"La contraseña es incorrecta" });
        }

        return res.json({message: "Inicio exitoso", user});

    }

    static register = async (req: Request, res: Response) => {
        const repo = AppDataSource.getRepository(User);
        const data = repo.create(req.body);
        const saved = await repo.save(data);
        

        return res.json({message: "Registro exitoso",
                        user: saved
        });
    }
}