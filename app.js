const express = require("express");
const app = express();
const path = require("path"); //unifica rutas dentro de los sistemas operativos;

const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath)); /*le digo a express que quiero tener la carpeta "public" como un 
                                       recurso de archivos estáticos; */

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/home.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/register.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/login.html"))
});

app.post("/register", (req, res) => {
    res.redirect("/");
})

app.post("/login", (req, res) => {
    res.redirect("/");
})