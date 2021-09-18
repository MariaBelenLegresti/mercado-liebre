const express = require("express");
const app = express();
const path = require("path"); //unifica rutas dentro de los sistemas operativos;

const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath)); /*le digo a express que quiero tener la carpeta "public" como un 
                                       recurso de archivos estáticos; */

app.listen(3030, () => {
    console.log("Servidor corriendo en http://localhost:3030");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/home.html"))
});