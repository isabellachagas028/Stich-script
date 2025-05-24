var express = require("express");
var router = express.Router();

var ProjetoController = require("../controllers/ProjetoController");

router.get("/porUsuario/:idUsuario", function (req, res) {
  ProjetoController.buscarProjetosPorUsuario(req, res);
});

router.post("/cadastrar", function (req, res) {
  ProjetoController.cadastrar(req, res);
})
router.delete("/deletar/:idProjeto", function (req, res) {
  ProjetoController.deletar(req, res);
})

module.exports = router;