var express = require("express");
var router = express.Router();

const upload = require('../config/configUpload'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD

router.get("", (req, res) => {
  res.render("index")
});

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/cadastrar', upload.single('foto'), (req, res) => {
  ProjetoController.cadastrar(req, res);
});

var ProjetoController = require("../controllers/ProjetoController");

router.get("/porUsuario/:idUsuario", function (req, res) {
  ProjetoController.buscarProjetosPorUsuario(req, res);
});


router.delete("/deletar/:idProjeto", function (req, res) {
  ProjetoController.deletar(req, res);
})
router.put("/atualizarestado/:idProjeto", function (req, res) {
  ProjetoController.atualizarestado(req, res);
})

module.exports = router;