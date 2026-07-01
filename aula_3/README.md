# Aula 3

Projeto com estrutura MVC expandida, rotas, controller, DAO, infraestrutura e uso de variáveis de ambiente com `dotenv`.

## Estrutura

- `.env`: arquivo de configuração de variáveis de ambiente (ex: porta do servidor).
- `src/server.ts`: servidor Express com uso de `dotenv` e middlewares como `express.json()`.
- `routes/`: configuração de rotas da aplicação.
- `controllers/`: controladores com as regras de entrada e saída de dados.
- `dao/`: objetos de acesso a dados (Data Access Object).
- `infra/`: middlewares e outras configurações de infraestrutura.

## Como executar

```bash
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:3333` (ou na porta definida no arquivo `.env`).
