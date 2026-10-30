import { Router } from "express";
import {
  obtenerProductos,
  obtenerProductoPorCodigo,
  crearProducto,
  actualizarProducto,
  borrarProducto,
} from "./producto.controller.js";

const router = Router();

router.get("/productos", obtenerProductos);
router.get("/productos/:codigo", obtenerProductoPorCodigo);
router.post("/productos", crearProducto);
router.put("/productos/:codigo", actualizarProducto);
router.delete("/productos/:codigo", borrarProducto);

export default router;
