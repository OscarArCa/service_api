// src/routes/user.routes.ts
import { Router } from "express";
import { User } from "../entities/User";
import { AppDataSource } from "../config/database";

const router = Router();

router.get("/", (req, res) => {
  res.send("User (Existe)");
});

//EndPoint Post guardar y actualizar (basico pa' no marearse)

router.post("/save", async (req,res) => {
//AppDataSource.getRepository(entiti) obtiene la entidad del repo indicado
const repo = AppDataSource.getRepository(User);
//const us = repo.create(req.body) crea el espacio para guardar el json en la entidad
const us = repo.create(req.body);
//const save = await repo.save(us) guarda o actualiza el usuario en el espacio creado en el repo "us"
const saved = await repo.save(us);
//envia el entiti creado a la db con los datos "saved"
res.json(saved);
});

//EndPoint get para obtener usuarios

router.get("/show", async(req, res) => {
//const repo = AppDataSource.getRepository(User) obtenemos el repo para ingresar los datos
  const repo = AppDataSource.getRepository(User);
//const users = await repo.find busca y trae los datos de la db
  const users = await repo.find();
//res.json(users) envia los datos del entiti al ronEnd
  res.json(users);
})

export default router;
