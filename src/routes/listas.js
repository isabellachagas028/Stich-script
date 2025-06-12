var express = require("express");
var router = express.Router();

var listaController = require("../controllers/listaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/adicionar", function (req, res) {
    listaController.adicionar(req, res);
})
router.get("/exibir/:idUsuario", function (req, res) {
    listaController.exibir(req, res);
}
)
router.put("/atualizar/:idLista", function (req, res) {
    listaController.atualizar(req, res);
})
router.delete("/excluir/:idLista", function (req, res) {
    listaController.excluirItem(req, res);
})

module.exports = router;