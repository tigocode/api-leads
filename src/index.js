const express = require('express');
const cors = require('cors');
const app = express();

const { cadastrarLeads } = require('./service/services');
const { validarUsuario } = require('./validation/validacao');

app.use(cors());
app.use(express.json());

app.post('/leads', async (req, res) => {
  const { nome, email } = req.body;

  const usuarioValido = validarUsuario(nome, email);

  if(usuarioValido.status) {
    await cadastrarLeads(nome, email);
    res.status(204).send();
  } else {
    res.status(400).send({mensagem: usuarioValido.mensagem});
  }
});

app.listen(3000, () => {
  let data = new Date();
  console.log(`Servidor rodando na PORT 3000 e em execução desde: ${data.toLocaleString()}`);
});
