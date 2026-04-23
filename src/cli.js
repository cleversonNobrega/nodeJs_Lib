import fs from "fs";
import trataErros from "./erro/funcoesErro.js";
import { contaPalavras } from "./index.js";

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, "utf-8", (erro, texto) => {
  try {
    if (erro) throw erro;
    contaPalavras(texto);
  } catch (erro) {
    trataErros(erro);
  }
});

async function criaEsalvaArquivo(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`;
  const textoPalavras = JSON.stringify(listaPalavras);

  try {
    await fs.promises.writeFile(arquivoNovo, textoPalavras);
    console.log("Arquivo criado com sucesso!");
  } catch (erro) {
    throw erro;
  }
}
