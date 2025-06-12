var database = require("../database/config");

function buscarProjetosPorUsuario(usuarioId) {

  var instrucaoSql = `select* from projetos where fkusuario = ${usuarioId} order by dt_inicio`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(nome, descricao,dt_inicio,fio,agulha,estado,caminhoImagem,fkUsuario,valor,tecnica) {
  
  var instrucaoSql = ` INSERT INTO projetos (nome, descricao, dt_inicio, fio, agulha, estado, imagem,fkUsuario, valor,tecnica) VALUES ('${nome}', '${descricao}', '${dt_inicio}', '${fio}', '${agulha}', '${estado}','${caminhoImagem}',${fkUsuario},${valor},'${tecnica}')`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function deletar(idProjeto) {
  var instrucaoSql = `DELETE FROM projetos WHERE id = ${idProjeto}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function atualizarestado(idProjeto, estado) {
  var instrucaoSql = `UPDATE projetos SET estado = '${estado}' , dt_final =current_date() WHERE id = ${idProjeto}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);

}
function buscarTecnica(idUsuario) {
   var instrucaoSql =`SELECT tecnica, COUNT(*) AS quantidade_projetos
FROM projetos
WHERE fkUsuario = ${idUsuario} and estado= "finalizado"
GROUP BY tecnica;`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);}
module.exports = {
  buscarProjetosPorUsuario,
  cadastrar
  ,deletar,
  buscarTecnica,
  atualizarestado
}
