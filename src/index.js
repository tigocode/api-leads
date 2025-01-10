const express = require('express');
const cors = require('cors');
const app = express();

const { cadastrarLeads } = require('./service/services');

app.use(cors());
app.use(express.json());

app.post('/leads', async (req, res) => {
  const { nome, email } = req.body;

  await cadastrarLeads(nome, email);

  res.status(204).send();
});

app.listen(3000, () => {
  let data = new Date();
  console.log(`Servidor rodando na PORT 3000 e em execução desde: ${data.toLocaleString()}`);
});
