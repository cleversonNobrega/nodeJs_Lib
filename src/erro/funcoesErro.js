function trataErros(erro) {
  if (erro.CODE === "ENOENT") {
    throw new Error("Arquivo não encontrado!");
  } else {
    return "Erro na aplicação";
  }
}

module.exports = trataErros;
