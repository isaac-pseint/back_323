import express from "express";
import cors from "cors";
import RutaUser from "./src/module/user/usuario.routes.js";
import RutaProducto from "./src/module/productos/producto.routes.js";

const app = express();
const PORT = 4100;

app.use(express.json());
app.use(cors());

app.use("/api", RutaUser);
app.use("/api", RutaProducto);

app.listen(PORT, () => {
  console.log(`SERVIDOR iniciado en el puerto ${PORT}`);
});
