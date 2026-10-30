//importa el creador de rutas de express
// /api/user
import { Router } from "express";

import * as usuarioCtr from "./usuario.controller.js";

const router = Router(); //uso el metodo router de xpress para crear la ruta
//la ruta tiene dos paranmetros la ruta en si misma 
//y el metod que la resuelve

router.get("/usuarios", usuarioCtr.obtenerUsuarios);
router.get("/usuarios/:id", usuarioCtr.getUserById);
router.get("/usuarios/:id", usuarioCtr.obtenerUsuarioId);
router.post("/usuarios", usuarioCtr.crearUsuario);
router.delete("/usuarios/:id", usuarioCtr.borrarUsuario);
router.put("/usuarios/:id", usuarioCtr.actualizarUsuario);

export default router;