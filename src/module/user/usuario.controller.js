import { UserModel } from "./usuario.model.js";

export const obtenerUsuarios = async (req, res) => {
  try {
    const results = await UserModel.findALL();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      status: "ok",
      error: `error al listar : ${error}`,
    });
  }
};
export const getUserById = async (req, res) => {
  // codigo protegido con try..catch
  try {
    const results = await UserModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `error al listar : ${error}`,
    });
  }
};