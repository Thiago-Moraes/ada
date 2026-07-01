# Aula 2

Projeto com estrutura MVC simplificada, rotas, controller e middleware.

## Estrutura

- `src/server.ts`: servidor Express que monta o roteador central.
- `routes/index.ts`: define a rota `GET /client`.
- `controllers/ClientsController.ts`: controller que retorna uma lista de clientes.
- `infra/authMiddleware.ts`: middleware de autenticação (presente, mas ainda sem implementação).

## Como executar

```bash
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:3333`.
