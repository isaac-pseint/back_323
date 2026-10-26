import express from "express"; // importamos la libreria
import cors from "cors";
import RutaUser from "./src/module/user/usuario.routes.js"
 const app  = express(); // metodo contructor de la libreria
  const PORT = 4100; //puerto donde desplegaremos el server

app.use(express.json()); // Para que el servidor entienda JSON en el body
app.use(cors());

app.use("/api", RutaUser);

//creamos una instancia de la libreria express en la constante app

  app.listen(PORT,() =>{
console.log(`SERVIDOR iniciado en el puerto ${PORT}`)
})

