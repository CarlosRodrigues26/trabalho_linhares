import express from "express";
import artistaRoutes from "./web/routes/artistaRoute";
const app = express();
app.use(express.json());
app.use("/api/artistas", artistaRoutes);
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
