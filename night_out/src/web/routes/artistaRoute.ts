import { Router } from "express";
import * as artistaController from "../controller/artistaController";

const router = Router();

router.get("/", artistaController.listarArtistas);
router.get("/:id", artistaController.buscarArtistaPorId);
router.post("/", artistaController.cadastrarArtista);
router.put("/:id", artistaController.atualizarArtista);
router.delete("/:id", artistaController.deletarArtista);

export default router;
