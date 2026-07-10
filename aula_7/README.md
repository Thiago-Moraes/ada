# Aula 7: Autenticação com JWT e Middlewares

Olá, aluno! Nesta sétima aula, avançamos significativamente na segurança e no controle de acesso da nossa API. O nosso objetivo principal foi entender como proteger rotas sensíveis utilizando o padrão de tokens de acesso **JWT (JSON Web Token)** e o conceito de **Middlewares** no Express.

Com isso, aprendemos a implementar um fluxo completo de autenticação: desde a validação de credenciais em um endpoint de login (`POST /login`), a geração e assinatura de um token criptografado com informações do usuário, até a interceptação de requisições de rotas protegidas (`GET /list`) para validar se o usuário possui permissão para acessar os dados.

---

## 📂 Estrutura do Projeto

Abaixo apresentamos a árvore de diretórios e arquivos desta aula, incluindo a nova pasta de Middlewares:

```text
aula_7/
├── controllers/
│   └── ControllerTodo.ts         # Orquestra as ações de manipulação de Atividades
├── dao/
│   ├── Connection.ts             # Gerencia a conexão com o banco SQLite
│   └── todo.ts                   # Persiste e recupera os dados de Atividades no banco
├── Entities/
│   └── Activities.ts             # Classe de domínio que representa uma Atividade
├── infra/
│   └── database.db               # Banco de dados SQLite contendo a tabela de atividades
├── middleware/
│   ├── admAccessMiddleware.ts    # Middleware para controle de acesso administrativo
│   └── authmiddleware.ts         # Middleware para verificação e validação de tokens JWT
├── routes/
│   └── index.ts                  # Define as rotas (incluindo /login e rotas protegidas por middleware)
├── src/
│   └── server.ts                 # Inicialização do servidor Express acoplado ao dotenv e rotas
├── .env                          # Configura DATABASE_PATH e a chave de criptografia SECRET_KEY
├── exercicio.md                  # Referência de exercícios propostos
├── package.json                  # Manifesto do projeto com dependências locais
├── tsconfig.json                 # Configurações do compilador TypeScript
└── package-lock.json             # Registro de versões exatas das dependências instaladas
```

* **`middleware/authmiddleware.ts`**: Intercepta a requisição, extrai o token JWT do cabeçalho `Authorization` e valida sua integridade usando a chave secreta definida no ambiente. Se for válido, permite que a requisição prossiga; caso contrário, barra o acesso retornando status `401 Unauthorized`.
* **`routes/index.ts`**: Agora conta com uma nova rota `POST /login` para autenticar o usuário e assinar tokens JWT. Adicionalmente, aplica o `authmiddleware` na rota `GET /list` para impedir consultas sem o token apropriado.

---

## 🛠️ Comandos Utilizados

* `npm install`: Instala todas as dependências locais declaradas no `package.json` (incluindo Express, dotenv e sqlite3).
* `npm run dev`: Inicializa o servidor local em modo de desenvolvimento com recarregamento automático por meio do `tsx`.

*Nota: Para esta aula, também fazemos uso do pacote `jsonwebtoken` (e suas tipagens `@types/jsonwebtoken`) configurado na raiz do repositório para permitir a codificação e decodificação de tokens.*

---

## 🚀 Como Executar a Aplicação

Siga o passo a passo abaixo para rodar o projeto localmente:

1. Navegue até a pasta desta aula:
   ```bash
   cd aula_7
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o seu arquivo `.env` com a porta, caminho do banco e chave secreta para criptografia:
   ```env
   PORT=3333
   DATABASE_PATH=./infra/database.db
   SECRET_KEY=sua_chave_secreta_segura_aqui
   ```

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. **Testando o fluxo de autenticação**:
   * Tente acessar a rota de listagem diretamente (`GET http://localhost:3333/list`). O servidor retornará `401 Unauthorized` porque você ainda não está autenticado.
   * Realize o login enviando uma requisição `POST http://localhost:3333/login` com o seguinte corpo:
     ```json
     {
       "data": {
         "user": "thiago",
         "password": "1234"
       }
     }
     ```
   * Copie o token retornado na resposta de login.
   * Ao fazer a requisição para `GET http://localhost:3333/list`, adicione o cabeçalho `Authorization` com o valor `Bearer <seu_token_aqui>`. O acesso será liberado e você receberá a lista de tarefas normalmente.

---

## 📝 O que aprendemos nesta aula?

* **Conceito de Middlewares**: Entendemos o que são funções middleware no Express e como elas atuam como interceptadores no ciclo de requisição e resposta do servidor.
* **Autenticação com JWT (JSON Web Tokens)**: Como gerar tokens assinados contendo informações criptografadas (`payload`) e tempo de expiração (`expiresIn`).
* **Proteção de Rotas**: Como blindar rotas específicas aplicando middlewares na pilha de execução de rotas do Express.
* **Leitura de Cabeçalhos HTTP**: Extração e processamento de informações dinâmicas vindas do cabeçalho `Authorization` (`Bearer <token>`).
* **Uso Seguro de Chaves Secretas**: Uso do `.env` para armazenar de forma segura o segredo (`SECRET_KEY`) utilizado na criptografia e validação dos tokens.
