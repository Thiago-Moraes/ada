# Aula 6: Validação de Regras de Negócio com Entidades

Olá, aluno! Nesta sexta aula, demos um passo fundamental em direção ao desenvolvimento de softwares robustos e profissionais, aproximando-nos de boas práticas de arquitetura. Aprendemos sobre a modelagem de **Entidades** e a centralização de **Regras de Negócio** dentro do nosso domínio.

Em vez de permitir que dados inconsistentes cheguem ao nosso banco de dados, criamos a classe **`Activity`** (`Entities/Activities.ts`). Ela é responsável por se autovalidar no momento em que é instanciada (no construtor), garantindo que a descrição da tarefa nunca seja vazia e que a data de início nunca seja maior do que a data de término. Com isso, protegemos a integridade das informações do nosso sistema diretamente no domínio da aplicação.

---

## 📂 Estrutura do Projeto

Abaixo apresentamos a árvore de diretórios e arquivos desta aula, agora contando com a nossa pasta de Entidades:

```text
aula_6/
├── controllers/
│   └── ControllerTodo.ts  # Orquestra as requisições de criação e listagem usando a classe Activity
├── dao/
│   ├── Connection.ts      # Gerencia a conexão com o banco SQLite
│   └── todo.ts            # Recebe a Entidade Activity estruturada e a persiste no banco de dados
├── Entities/
│   └── Activities.ts      # Classe de domínio que representa uma Atividade e valida suas regras
├── infra/
│   └── database.db        # Arquivo de banco de dados SQLite com a tabela activities
├── routes/
│   └── index.ts           # Roteador responsável por receber dados brutos e instanciar a Entidade Activity
├── src/
│   └── server.ts          # Inicialização do servidor Express acoplado ao dotenv e rotas
├── .env                   # Configura a variável DATABASE_PATH apontando para o arquivo .db
├── exercicio.md           # Referência conceitual de exercícios de banco de dados
├── package.json           # Dependências com os drivers sqlite e sqlite3 adicionados
├── tsconfig.json          # Configurações do compilador do TypeScript
└── package-lock.json      # Versões exatas das dependências instaladas
```

* **`Entities/Activities.ts`**: Modela a classe `Activity`. Contém métodos como `validateDates` e `validateDescription`, que lançam erros caso os dados enviados na requisição violem as regras de negócio da aplicação.
* **`routes/index.ts`**: Agora, ao criar uma atividade (`POST /create`), a rota primeiro instancia um novo objeto da classe `Activity`, disparando automaticamente as validações antes de enviar o objeto para o controlador e persistir no banco.

---

## 🛠️ Comandos Utilizados

* `npm install`: Instala os pacotes necessários especificados no `package.json`.
* `npm run dev`: Inicializa o servidor monitorando alterações com `tsx watch`.

---

## 🚀 Como Executar a Aplicação

Siga o passo a passo abaixo para rodar o projeto localmente:

1. Navegue até a pasta desta aula:
   ```bash
   cd aula_6
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env` para apontar para o banco de dados:
   ```env
   PORT=3333
   DATABASE_PATH=./infra/database.db
   ```

4. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

5. O servidor estará ativo em `http://localhost:3333`. Tente enviar uma requisição de criação (`POST /create`) com dados inválidos para ver a validação em funcionamento:
   * **Exemplo de Envio com Erro (Data de Início posterior ao Término)**:
     ```json
     {
       "data": {
         "description": "Estudar Entidades",
         "start_date": "2026-07-10",
         "end_date": "2026-07-08"
       }
     }
     ```
     *O servidor lançará um erro impedindo a gravação no banco, pois a validação detectará as datas inconsistentes.*

---

## 📝 O que aprendemos nesta aula?

* **Validação Orientada a Objetos**: Como usar o construtor da classe (`constructor`) para interceptar dados de entrada e validar campos obrigatórios e formatos.
* **Integridade do Domínio**: Evitar que dados inválidos alcancem o banco de dados separando a validação sintática/semântica na camada de Entidades.
* **Mapeamento de Dados de Entrada**: Como instanciar uma entidade a partir de dados brutos enviados pelo cliente (`req.body`) e repassá-la de forma tipada e segura para as camadas de Controller e DAO.
* **Refatoração de DAOs**: Ajustamos o `TodoDAO` para receber a classe `Activity` em vez de tipos genéricos estruturados, garantindo conformidade com a tipagem estática do TypeScript.
