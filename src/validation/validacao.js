const validarNome = (nome) => {
  const regexNome = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s\-'´`]+$/;

  const isValid = nome.length >= 2 && regexNome.test(nome);

  return isValid;
};
const validarEmail = (email) => {
  const RegexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isValid = RegexEmail.test(email);

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
