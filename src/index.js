const fs = require("fs");

const caminhoArquino = process.argv;
const link = caminhoArquino[2];

fs.readFile(link, "utf-8", (erro, texto) => {
  console.log(texto);
});
