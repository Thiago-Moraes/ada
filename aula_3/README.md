# Aula 3: Configuração de Ambiente com Dotenv

Olá, aluno! Nesta terceira aula, abordamos um pilar fundamental da segurança e da configuração em projetos backend: o gerenciamento de **Variáveis de Ambiente**. Quando estamos desenvolvendo um sistema, dados sensíveis (como chaves de API, credenciais de banco de dados ou portas de servidores) não devem ser escritos diretamente no código-fonte (*hardcoded*).

Para solucionar isso, aprendemos a utilizar o pacote **dotenv**, que nos permite separar as configurações de infraestrutura do código da nossa aplicação, lendo variáveis externas a partir de um arquivo de configuração local `.env`.

---

## 📂 Estrutura do Projeto

Abaixo apresentamos a árvore de diretórios e arquivos desta aula:

```text
aula_3/
├── controllers/
│   └── ClientsController.ts  # Controla a lógica de negócios da entidade de clientes
├── dao/                      # Camada reservada para o acesso a dados (Data Access Object)
├── infra/                    # Middlewares e configurações de infraestrutura
├── routes/
│   └── index.ts              # Define as rotas disponíveis na aplicação
├── src/
│   └── server.ts             # Servidor Express com carregamento das variáveis com dotenv
├── .env                      # Arquivo contendo as variáveis de ambiente locais (não enviado ao Git)
├── package.json              # Manifesto do projeto com a dependência dotenv adicionada
├── tsconfig.json             # Arquivo de configuração do compilador TypeScript
└── package-lock.json         # Versões exatas das dependências instaladas
```

* **`.env`**: Guarda pares de chave-valor (como `PORT=3333`). Este arquivo deve ser mantido localmente e nunca versionado em repositórios públicos.
* **`src/server.ts`**: Utiliza o comando `dotenv.config()` para carregar as configurações contidas no `.env` e inicializa o servidor Express na porta especificada por `process.env.PORT`.

---

## 🛠️ Comandos Utilizados

* `npm install`: Instala as dependências listadas no `package.json`, trazendo o pacote `dotenv`.
* `npm run dev`: Inicializa o servidor monitorando alterações em tempo real via `tsx watch`.

---

## 🚀 Como Executar a Aplicação

Siga os passos abaixo para preparar e rodar o projeto:

1. Navegue até a pasta desta aula:
   ```bash
   cd aula_3
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie e configure o arquivo `.env` (caso ele ainda não exista) com a porta desejada:
   ```env
   PORT=3333
   ```

4. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

5. O servidor tentará ler a porta configurada no arquivo `.env`. Se configurado com a porta `3333`, a aplicação ficará disponível em `http://localhost:3333`.
   * Teste a rota principal: `GET http://localhost:3333/`
   * Teste a listagem de clientes: `GET http://localhost:3333/client`

---

## 📝 O que aprendemos nesta aula?

* **O Conceito de Variáveis de Ambiente**: Por que separar configurações de ambiente (como portas de servidores e senhas) do código-fonte.
* **Uso da Biblioteca `dotenv`**: Como configurar o `dotenv` na inicialização do servidor para ler arquivos externos `.env`.
* **Uso do Objeto `process.env`**: Como acessar os valores de ambiente no Node.js utilizando TypeScript de maneira segura.
* **Flexibilidade da Porta do Servidor**: Criação de um fallback dinâmico (ex: `process.env.PORT || 3333`) para garantir que o projeto funcione tanto em ambientes locais quanto em servidores de produção (como Heroku, Render ou AWS).
