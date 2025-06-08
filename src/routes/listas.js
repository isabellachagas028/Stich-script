var express = require("express");
var router = express.Router();

var listaController = require("../controllers/listaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    listaController.adicionar(req, res);
})