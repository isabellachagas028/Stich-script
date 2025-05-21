var express = require("express");
var router = express.Router();

var ProjetoController = require("../controllers/ProjetoController");

router.get("/:empresaId", function (req, res) {
  ProjetoController.buscarProjetosPorUsuario(req, res);
});

router.post("/cadastrar", function (req, res) {
  ProjetoController.cadastrar(req, res);
})

module.exports = router;