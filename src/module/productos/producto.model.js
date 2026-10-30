import db from "../../config/dbconexion.js";

export const ProductModel = {
  findALL: async () => {
    const sql = "SELECT * FROM producto ORDER BY descripcion ASC";
    const [rows] = await db.query(sql);
    return rows;
  },

  findByCodigo: async (codigo) => {
    const sql = "SELECT * FROM producto WHERE codigo = ?";
    const [rows] = await db.query(sql, [codigo]);
    return rows;
  },

  create: async (data) => {
    const { codigo, descripcion, unidad, costo, precio } = data;

    const [codigoExiste] = await db.query(
      "SELECT codigo FROM producto WHERE codigo = ?",
      [codigo]
    );

    if (codigoExiste.length > 0) {
      throw new Error(`El producto con código '${codigo}' ya está registrado`);
    }

    const nuevoProducto = {
      codigo,
      descripcion,
      unidad,
      costo,
      precio,
    };

    const sql = "INSERT INTO producto SET ?";
    const [rows] = await db.query(sql, [nuevoProducto]);
    return rows;
  },

  update: async (codigo, data) => {
    const { codigo: _, ...datosActualizados } = data;
    const sql = "UPDATE producto SET ? WHERE codigo = ?";
    const [rows] = await db.query(sql, [datosActualizados, codigo]);
    return rows;
  },

  delete: async (codigo) => {
    const sql = "DELETE FROM producto WHERE codigo = ?";
    const [rows] = await db.query(sql, [codigo]);
    return rows;
  },
};
