const validarNome = (nome) => {
  const isValid = nome.length >= 2;

  return isValid;
};
const validarEmail = (email) => {
  const isValid = email !== '' ? true : false;

  return isValid;
}
const validarUsuario = (nome, email) => {
  const nomeValido = validarNome(nome);
  const emailValido = validarEmail(email);

  // O Operador && garante que o resultado da Constante ususarioValido só irá avança caso seja TRUE;
  const usuarioValido = nomeValido && emailValido;

  if(usuarioValido) {
    return {status: true, mensagem: ''};
  } else {
    return {status: false, mensagem: 'Nome ou Email inválido!'}
  }
}

module.exports = {
  validarUsuario,
}
