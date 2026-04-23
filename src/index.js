const fs = require("fs");
<<<<<<< HEAD
const trataErros = require("./erros/funcoesErro");

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
=======
const { text } = require("stream/consumers");
const caminhoArquino = process.argv;
const link = caminhoArquino[2];
>>>>>>> ce440032dec6e55da576ee2b96700799eba54772

fs.readFile(link, "utf-8", (erro, texto) => {
  try {
    if (erro) throw erro;
    contaPalavras(texto);
  } catch (erro) {
<<<<<<< HEAD
    trataErros(erro);
=======
    if (erro.code === "ENOENT") console.log("erro que esperava");
    else console.log("outro erro");
>>>>>>> ce440032dec6e55da576ee2b96700799eba54772
  }
});

function contaPalavras(texto) {
  const paragrafos = extraiParagrafos(texto);
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verificaPalavrasDuplicadas(paragrafo);
  });
  console.log(contagem);
}

function extraiParagrafos(texto) {
<<<<<<< HEAD
  return texto.toLowerCase().split("\n");
=======
  return (paragrafos = texto.toLowerCase().split("\n"));
>>>>>>> ce440032dec6e55da576ee2b96700799eba54772
}

function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(" ");
  const resultado = {};
  listaPalavras.forEach((palavra) => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  });
  return resultado;
}
