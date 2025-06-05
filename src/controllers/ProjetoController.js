var projetoModel = require("../models/projetoModel");

function buscarProjetosPorUsuario(req, res) {
  var idUsuario = req.params.idUsuario;

  projetoModel.buscarProjetosPorUsuario(idUsuario)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os projetos: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {

  let nome = req.body.nomeServer;
  let descricao = req.body.descricaoServer;
  let fio = req.body.fioServer;
  let dt_inicio = req.body.dataServer; 
  let agulha = req.body.agulhaServer;
  let estado = req.body.estadoServer;
  var valor= req.body.valorServer
  var fkUsuario = req.body.fkUsuarioServer;
  var caminhoImagem = req.file ? req.file.filename : null;


  if (nome == undefined) {
    res.status(400).send("O nome do projeto está indefinido!");
  } else if (descricao == undefined) {
    res.status(400).send("A descrição do projeto está indefinida!");
  } else if (fio == undefined) {
    res.status(400).send("O fio do projeto está indefinido!");
  } else if (dt_inicio == undefined) {
    res.status(400).send("A data de início do projeto está indefinida!");
  } else if (agulha == undefined) {
    res.status(400).send("A agulha do projeto está indefinida!");
  } else if (estado == undefined) {
    res.status(400).send("O estado do projeto está indefinido!");
  }
  else if (fkUsuario == undefined) {
    res.status(400).send("O ID do usuário (fkUsuario) está indefinido!");
  } else {

    projetoModel.cadastrar(nome, descricao, dt_inicio, fio, agulha, estado,caminhoImagem,fkUsuario, valor)
      .then(
        function (resultado) {
          res.json(resultado);
        }
      ).catch(
        function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao realizar o cadastro do projeto! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        }
      );
  }
}
function deletar(req, res) {

  let idProjeto = req.params.idProjeto;


  if (idProjeto == undefined) {
    res.status(400).send("O ID do projeto está indefinido!");
  } else {

    projetoModel.deletar(idProjeto)
      .then(
        function (resultado) {
          res.json(resultado);
        }
      ).catch(
        function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao realizar o cadastro do projeto! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        }
      );
  }
}
function atualizarestado(req, res) {
  
  let idProjeto = req.params.idProjeto;
  let estado = req.body.estadoServer;


  if (idProjeto == undefined) {
    res.status(400).send("O ID do projeto está indefinido!");
  } else if (estado == undefined) {
    res.status(400).send("O estado do projeto está indefinido!");
  } else {

    projetoModel.atualizarestado(idProjeto, estado)
      .then(
        function (resultado) {
          res.json(resultado);
          
        }
      ).catch(
        function (erro) {
          console.log(erro);
          console.log(
            "Houve um erro ao realizar a atualização do estado do projeto! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        }
      );
  }
}

module.exports = {
  buscarProjetosPorUsuario,
  cadastrar
  , deletar,
  atualizarestado
};