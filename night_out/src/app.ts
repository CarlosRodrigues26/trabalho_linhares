import express from "express";
import artistaRoutes from "./web/routes/artistaRoute";
import casaDeShowRoutes from "./web/routes/casaDeShowRoutes";

const app = express();

app.use(express.json());
app.use("/api/artistas", artistaRoutes);
app.use("/api/casa_de_show", casaDeShowRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
