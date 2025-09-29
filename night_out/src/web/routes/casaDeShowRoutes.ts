import { Router } from "express";
import * as casaDeShowController from "../controller/casaDeShowController";

const router = Router();

router.get("/", casaDeShowController.listarCasasDeShow);
router.get("/:id", casaDeShowController.buscarCasaDeShowPorId);
router.post("/", casaDeShowController.cadastrarCasaDeShow);
router.put("/:id", casaDeShowController.atualizarCasaDeShow);
router.delete("/:id", casaDeShowController.deletarCasaDeShow);

export default router;
