import { Router } from "express";
import {ServiceController} from "../controllers/service.controller";

const router = Router();

router.get("/", (req, res) =>{
    res.send("Service (Existe))")
})

router.post("/private/details", ServiceController.privateDetails);

export default router;