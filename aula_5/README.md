# Aula 5: Persistência de Dados com SQLite

Olá, aluno! Nesta quinta aula, conectamos as peças fundamentais do desenvolvimento backend: integramos o banco de dados **SQLite** com a nossa API construída em **Express** utilizando o padrão **MVC**. Aprendemos a criar uma camada de persistência de dados real, onde as informações enviadas pelo cliente são salvas no disco do servidor de maneira estruturada.

Estudamos como criar e gerenciar uma conexão dinâmica através de variáveis de ambiente (`DATABASE_PATH`), isolar os comandos SQL em classes chamadas **DAO (Data Access Object)** e mapear essas ações para rotas HTTP de consulta (`GET /list` e `GET /find/:id`) e inserção (`POST /create`). Além disso, implementamos o endpoint de atualização (`PUT /update/:id`) para gerenciar as datas de início das atividades.

---

## 📂 Estrutura do Projeto

Abaixo apresentamos a árvore de diretórios e arquivos desta aula:

```text
aula_5/
├── controllers/
│   └── ControllerTodo.ts  # Orquestra a requisição e a resposta para o gerenciamento de tarefas
├── dao/
│   ├── Connection.ts      # Gerencia a abertura e fechamento da conexão com o banco SQLite
│   └── todo.ts            # Classe TodoDAO contendo as queries SQL específicas para a tabela activities
├── infra/
│   └── database.db        # Arquivo físico do banco de dados SQLite onde as tabelas e dados são salvos
├── routes/
│   └── index.ts           # Roteador contendo endpoints de listagem, busca, criação e atualização
├── src/
│   └── server.ts          # Inicialização do servidor Express acoplado ao dotenv e rotas
├── .env                   # Configura a variável DATABASE_PATH apontando para o arquivo .db
├── exercicio.md           # Proposta de exercício prático para criação de endpoints de atualização
├── package.json           # Dependências com os drivers sqlite e sqlite3 adicionados
├── tsconfig.json          # Configurações do compilador do TypeScript
└── package-lock.json      # Versões exatas das dependências instaladas
```

* **`dao/Connection.ts`**: Cria uma classe base que lê a variável `DATABASE_PATH` e inicia a conexão assíncrona com o SQLite usando os drivers `sqlite` e `sqlite3`.
* **`dao/todo.ts`**: A classe `TodoDAO` herda a conexão e realiza consultas como `SELECT * FROM activities`, inserções e atualizações diretamente na tabela `activities`.
* **`routes/index.ts`**: Define as rotas do projeto, incluindo a rota `PUT /update/:id` desenvolvida para alterar o andamento de uma atividade.

---

## 🛠️ Comandos Utilizados

* `npm install`: Instala as novas dependências `sqlite` (empacotador assíncrono para Node.js) e `sqlite3` (driver nativo do banco).
* `npm run dev`: Inicializa o servidor monitorando alterações com `tsx watch`.

---

## 🚀 Como Executar a Aplicação

Siga o passo a passo abaixo para rodar o projeto localmente:

1. Navegue até a pasta desta aula:
   ```bash
   cd aula_5
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie ou verifique o arquivo `.env` para garantir que o caminho do banco de dados está correto:
   ```env
   PORT=3333
   DATABASE_PATH=./infra/database.db
   ```

4. Inicie o servidor Express:
   ```bash
   npm run dev
   ```

5. O servidor estará rodando em `http://localhost:3333`. Você pode interagir com os seguintes endpoints:
   * **Listar Tarefas (`GET /list`)**: Retorna todas as tarefas salvas.
   * **Buscar Tarefa por ID (`GET /find/:id`)**: Retorna uma tarefa específica.
   * **Criar Tarefa (`POST /create`)**: Insere uma nova tarefa no banco.
     ```json
     {
       "data": {
         "description": "Estudar Banco de Dados com SQLite"
       }
     }
     ```
   * **Atualizar Data de Início (`PUT /update/:id`)**: Altera a data de início da tarefa correspondente ao ID informado. Envie o corpo da requisição no formato JSON:
     ```json
     {
       "data": {
         "startDate": "2026-07-08"
       }
     }
     ```

---

## 📝 O que aprendemos nesta aula?

* **Padrão DAO (Data Access Object)**: Como abstrair a manipulação de dados em classes especializadas, mantendo o código SQL fora dos controladores.
* **Uso de Parâmetros e Corpo em Atualizações**: Como criar rotas com o método `PUT`, extraindo o identificador por parâmetros de rota (`req.params`) e os novos dados de alteração pelo corpo da requisição (`req.body`).
* **Tratamento de Operações Assíncronas**: Uso de `async/await` para gerenciar a abertura do banco de dados e execução de queries sem travar o servidor Express.
* **Estrutura `try/catch`**: Captura de falhas de processamento e banco de dados para responder com status `500` apropriadamente.
