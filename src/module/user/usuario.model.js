
import db from "../../config/dbconexion.js"

export const UserModel = {
    findById: async (id) => {
    const sql = "SELECT * FROM users WHERE id=?";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  
  findALL: async () => {
    const sql = "SELECT * FROM usuario ORDER BY apellidos";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql);
    return rows;
  },
};
