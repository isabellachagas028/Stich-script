var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id as usuarioID, nome, email,imagem FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha,imagem, nickname) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario(nome, email, senha,imagem, nickname) VALUES ('${nome}', '${email}', '${senha}','${imagem}', '${nickname}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function listarRanking() {
  var instrucaoSql = `select us.nome,us.nickname,count(*) as projetos_concluidos from usuario us inner join projetos pro on us.id=pro.fkUsuario
where pro.estado="finalizado"
group by us.nickname, us.nome
order by projetos_concluidos desc;
`;

  return database.executar(instrucaoSql);
}
function listarUsuarios() {
  var instrucaoSql = `select nome,email,nickname,id from usuario;
`;

  return database.executar(instrucaoSql);
}
module.exports = {
    autenticar,
    cadastrar,
    listarUsuarios,
    listarRanking
};