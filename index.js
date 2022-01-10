const express = require("express");

const PORT = 5000;

const server = express();

server.use("/v1/pepe", (req, res) => {

    res.send("Hola pepe");

});

server.use("/v1/songoku", (req, res) => {

    res.send("Hola songoku");

});

server.use("/v1/koi", (req, res) => {

    res.send("El mejor equipo del mundo");

});

server.listen(PORT, () => {

    console.log("Escuchando el puerto: " + PORT);

});