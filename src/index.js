const express = require('express');
const app = express();

const { cadastrarLeads } = require('./service/services');

app.get('/leads', async (req, res) => {
  cadastrarLeads('Tiago', 'tiago@email.com')
});

app.listen(3000, () => {
  let data = new Date();
  console.log(`Servidor rodando na PORT 3000 e em execução desde: ${data.toLocaleString()}`);
});
