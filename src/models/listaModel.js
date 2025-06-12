var database = require("../database/config");
function adicionar(descricao, quantidade,fkUsuario){
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO lista(descricao, quantidade,fkUsuario) VALUES ('${descricao}', '${quantidade}',${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibir(usuarioId) {

  var instrucaoSql = `select* from lista where fkusuario = ${usuarioId} `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function atualizar(idLista,estado){
    var instrucaoSql=`update lista set estado="${estado}" where id=${idLista};`
      console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);

}
function excluirItem(idLista){
    var instrucaoSql=`delete from lista where id=${idLista};`
      console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);

}
module.exports = {
    adicionar,
    exibir,
    atualizar,
    excluirItem
};