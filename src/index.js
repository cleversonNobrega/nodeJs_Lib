const fs = require("fs");
const { text } = require("stream/consumers");

const caminhoArquino = process.argv;
const link = caminhoArquino[2];

fs.readFile(link, "utf-8", (erro, texto) => {
  quebraEmParagrafos(texto);
});

function quebraEmParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split("\n");
  const contagem = paragrafos.map((paragrafos) => {
    return verificaPalavraDuplicadas(paragrafos);
  });
  console.log(contagem);
}

function verificaPalavraDuplicadas(texto) {
  const listaPalavras = texto.split(" ");
  const resultado = {};

  listaPalavras.forEach((palavras) => {
    resultado[palavras] = (resultado[palavras] || 0) + 1;
  });

  return resultado;
}
