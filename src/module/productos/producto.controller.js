import { ProductModel } from "./producto.model.js";

export const obtenerProductos = async (req, res) => {
  try {
    const results = await ProductModel.findALL();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al obtener los productos: ${error.message || error}`,
    });
  }
};

export const obtenerProductoPorCodigo = async (req, res) => {
  try {
    const { codigo } = req.params;
    const results = await ProductModel.findByCodigo(codigo);

    if (results.length === 0) {
      return res.status(404).json({
        error: `Producto con código '${codigo}' no encontrado`,
      });
    }

    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al buscar el producto: ${error.message || error}`,
    });
  }
};

export const crearProducto = async (req, res) => {
  try {
    const { codigo, descripcion, unidad, costo, precio } = req.body;

    if (!codigo || !descripcion || !unidad || costo === undefined || precio === undefined) {
      return res.status(400).json({
        error: "Los campos codigo, descripcion, unidad, costo y precio son requeridos",
      });
    }

    const datosProducto = {
      codigo: String(codigo).trim(),
      descripcion: String(descripcion).trim(),
      unidad: String(unidad).trim(),
      costo: parseFloat(costo),
      precio: parseFloat(precio),
    };

    const results = await ProductModel.create(datosProducto);
    res.status(201).json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Ocurrió un error en la inserción: ${error.message || error}`,
    });
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    const { codigo } = req.params;
    const datos = req.body;

    if (Object.keys(datos).length === 0) {
      return res.status(400).json({
        error: "Debe enviar al menos un campo para actualizar",
      });
    }

    const results = await ProductModel.update(codigo, datos);

    if (results.affectedRows === 0) {
      return res.status(404).json({
        error: `No se encontró el producto con código '${codigo}' para actualizar`,
      });
    }

    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Ocurrió un error al actualizar: ${error.message || error}`,
    });
  }
};

export const borrarProducto = async (req, res) => {
  try {
    const { codigo } = req.params;
    const results = await ProductModel.delete(codigo);

    if (results.affectedRows === 0) {
      return res.status(404).json({
        error: `No se encontró el producto con código '${codigo}' para eliminar`,
      });
    }

    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Ocurrió un error al eliminar: ${error.message || error}`,
    });
  }
};
