const pool = require('./conexao.js');

const cadastrarLeads = async (nome, email) => {
    const conexao = await pool.getConnection();

    const resposta = await conexao.query(`INSERT INTO  leads (nome, email) VALUES ("${nome}", "${email}")`)
    console.log(resposta);
    conexao.release();

    return resposta;
}

module.exports = {
  cadastrarLeads
}
