var database = require("../database/config");

function buscarProjetosPorUsuario(usuarioId) {

  var instrucaoSql = `select* from projetos where fkusuario = ${usuarioId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(nome, descricao,dt_inicio,fio,agulha,estado,fkUsuario) {
  
  var instrucaoSql = ` INSERT INTO projetos (nome, descricao, dt_inicio, fio, agulha, estado, fkUsuario) VALUES ('${nome}', '${descricao}', '${dt_inicio}', '${fio}', '${agulha}', '${estado}',${fkUsuario})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function deletar(idProjeto) {
  var instrucaoSql = `DELETE FROM projetos WHERE id = ${idProjeto}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function atualizarestado(idProjeto, estado) {
  var instrucaoSql = `UPDATE projetos SET estado = '${estado}' WHERE id = ${idProjeto}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
module.exports = {
  buscarProjetosPorUsuario,
  cadastrar
  ,deletar,
  atualizarestado
}
