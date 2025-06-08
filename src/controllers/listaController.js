var listaModel = require("../models/listaModel");
function adicionar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var descricao = req.body.descricaoServer;
    var quantidade = req.body.quantidadeServer;
    var fkUsuario=req.body.usuarioServer



    // Faça as validações dos valores
    if (descricao== undefined) {
        res.status(400).send("Sua descricao está undefined!");
    } else if (quantidade == undefined) {
        res.status(400).send("Quantidade está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Usuario está undefined!");
    }
     else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        listaModel.adicionar(descricao,quantidade,fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
module.exports = {
    adicionar
};