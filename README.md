# 📚 nodeJs_Lib
 
Biblioteca CLI em Node.js para análise de textos — identifica e contabiliza **palavras duplicadas por parágrafo** em arquivos `.txt`, salvando os resultados em um arquivo de saída.
 
---
 
## 🚀 Funcionalidades
 
- Lê arquivos de texto (`.txt`) a partir de um caminho informado via CLI
- Analisa cada parágrafo individualmente
- Detecta palavras que aparecem mais de uma vez por parágrafo (com 3 ou mais caracteres)
- Ignora pontuação e diferenças de capitalização
- Salva o relatório de duplicadas em um arquivo `resultado.txt` no destino indicado
- Tratamento de erros com mensagens claras (ex: arquivo não encontrado)
---
 
## 🛠️ Tecnologias
 
- [Node.js](https://nodejs.org/) (ES Modules)
- [Commander.js](https://github.com/tj/commander.js/) — interface de linha de comando
- [Chalk](https://github.com/chalk/chalk) — saída colorida no terminal
---
 
## 📦 Instalação
 
Clone o repositório e instale as dependências:
 
```bash
git clone https://github.com/cleversonNobrega/nodeJs_Lib.git
cd nodeJs_Lib
npm install
```
 
> Requisito: **Node.js v18+**
 
---
 
## ▶️ Como usar
 
```bash
node src/cli.js --texto <caminho-do-arquivo> --destino <pasta-de-saída>
```
 
### Opções
 
| Opção | Alias | Descrição |
|---|---|---|
| `--texto` | `-t` | Caminho do arquivo `.txt` a ser processado |
| `--destino` | `-d` | Pasta onde o arquivo `resultado.txt` será salvo |
 
### Exemplo
 
```bash
node src/cli.js --texto ./arquivos/texto-kanban.txt --destino ./resultados
```
 
Saída no terminal:
```
texto processado com sucesso
```
 
Arquivo gerado em `./resultados/resultado.txt`:
```
palavras duplicadas no parágrafo 1:
palavras duplicadas no parágrafo 5: uma
palavras duplicadas no parágrafo 12: dispositivos, web, seu, conectado
palavras duplicadas no parágrafo 14: cliente, uma, para
```
 
---
 
## 📁 Estrutura do Projeto
 
```
nodeJs_Lib/
├── arquivos/               # Arquivos de texto de exemplo para teste
│   ├── texto-aprendizado.txt
│   ├── texto-kanban.txt
│   └── texto-web.txt
├── resultados/             # Pasta de saída dos relatórios gerados
│   └── resultado.txt
├── src/
│   ├── cli.js              # Ponto de entrada da CLI (Commander)
│   ├── index.js            # Lógica principal (contaPalavras)
│   ├── helpers.js          # Funções auxiliares (montaSaidaArquivo)
│   └── erros/
│       └── funcoesErro.js  # Tratamento de erros
├── package.json
└── package-lock.json
```
 
---
 
## 🧠 Como funciona
 
1. **`cli.js`** — Recebe os argumentos `--texto` e `--destino` via Commander, valida as entradas e chama `processaArquivo`.
2. **`index.js`** — Função `contaPalavras` divide o texto em parágrafos (por `\n`), limpa a pontuação e conta a frequência de cada palavra (≥ 3 caracteres).
3. **`helpers.js`** — Função `montaSaidaArquivo` formata a lista de palavras duplicadas para escrita em arquivo.
4. **`erros/funcoesErro.js`** — Trata erros conhecidos, como arquivo não encontrado (`ENOENT`).
---
 
## ⚠️ Erros comuns
 
| Situação | Mensagem |
|---|---|
| Caminhos não informados | `erro: favor inserir caminho de origem e destino` |
| Arquivo de texto não encontrado | `Arquivo não encontrado` |
 
---
