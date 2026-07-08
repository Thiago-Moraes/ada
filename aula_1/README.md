# Aula 1: Servidor Express Básico com TypeScript

Olá, aluno! Nesta primeira aula, nosso objetivo principal foi dar os primeiros passos no desenvolvimento de aplicações backend utilizando o **Node.js** com a linguagem **TypeScript** e o framework **Express**. Aprendemos como subir um servidor HTTP local simples do zero e como retornar nossos primeiros dados estruturados em formato JSON.

Abordamos conceitos cruciais como o ciclo de requisição e resposta do protocolo HTTP, além de entendermos como rodar arquivos TypeScript diretamente em ambiente de desenvolvimento sem a necessidade de compilá-los manualmente a todo momento.

---

## 📂 Estrutura do Projeto

Abaixo apresentamos a árvore de diretórios e arquivos desta aula:

```text
aula_1/
├── src/
│   └── server.ts       # Arquivo principal que configura e inicializa o servidor Express
├── package.json        # Manifesto do projeto contendo dependências e scripts de execução
├── tsconfig.json       # Arquivo de configuração do compilador do TypeScript
└── package-lock.json   # Histórico detalhado das versões exatas das dependências instaladas
```

* **`src/server.ts`**: Centraliza a configuração do Express, define a porta `3333` do servidor e contém a nossa primeira rota (`GET /`).
* **`package.json`**: Define as propriedades do projeto, além de mapear as dependências como `express` e as ferramentas de desenvolvimento como o compilador `typescript` e o executor `ts-node`.

---

## 🛠️ Comandos Utilizados

No terminal, utilizamos os seguintes comandos importantes:

* `npm install`: Instala todas as dependências declaradas no arquivo `package.json` (como o Express e as tipagens de desenvolvimento).
* `npm run dev`: Executa o script de desenvolvimento que utiliza o `ts-node` com suporte a ES Modules para rodar o arquivo `src/server.ts` sem precisar compilar previamente para JavaScript.

---

## 🚀 Como Executar a Aplicação

Para rodar este projeto em sua máquina local, siga os passos abaixo:

1. Abra o terminal e navegue até a pasta desta aula:
   ```bash
   cd aula_1
   ```

2. Instale as dependências necessárias para o projeto:
   ```bash
   npm install
   ```

3. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse a aplicação no seu navegador ou em um cliente HTTP (como Postman/Insomnia) através do endereço:
   ```http
   http://localhost:3333
   ```
   Você verá o seguinte retorno em formato JSON:
   ```json
   {
     "data": "Primeiro retorno"
   }
   ```

---

## 📝 O que aprendemos nesta aula?

* **Configuração Inicial do Node.js com TypeScript**: Como preparar o ambiente para receber tipagem estática utilizando o compilador `tsc`.
* **Inicialização de Servidor Express**: Como importar o framework Express e colocar o servidor para escutar requisições em uma porta específica (porta `3333`).
* **Rotas e Métodos HTTP**: Criação de uma rota básica utilizando o método `GET` para responder requisições na raiz `/`.
* **Respostas JSON**: Utilização do método `response.json()` para estruturar dados e retornar informações legíveis para o cliente.
* **Execução via `ts-node`**: Como usar o carregador de módulos do TypeScript (`ts-node/esm`) diretamente em conjunto com o Node.js.
