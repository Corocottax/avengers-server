const express = require("express");

const PORT = 5000;

const server = express();

server.use("/songoku", (req, res) => {

    res.send("Hola songoku");

});

server.use("/koi", (req, res) => {

    res.send("El mejor equipo del mundo");

});

server.listen(PORT, () => {

    console.log("Escuchando el puerto: " + PORT);

});