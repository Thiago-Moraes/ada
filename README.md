# Ada

Material de curso sobre Node.js, TypeScript e Express, organizado aulas com projetos de exemplo.

## Estrutura do repositório

- `aula_1/`: projeto inicial com um servidor Express simples em TypeScript.
- `aula_2/`: projeto com estrutura MVC simplificada, rotas, controller e middleware.
- `apresentacoes/`: materiais de apresentação.
- `passo-a-passo.md`: guia passo a passo para criar um projeto Node.js com TypeScript e Express.

## Aula 1

Projeto básico:

- `aula_1/src/server.ts`: servidor Express com rota `GET /`.
- `aula_1/package.json`: script de desenvolvimento usando `ts-node/esm`.

Como executar:

```bash
cd aula_1
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:3333`.

## Aula 2

Projeto com rota e controller:

- `aula_2/src/server.ts`: servidor Express que monta o roteador central.
- `aula_2/routes/index.ts`: define a rota `GET /client`.
- `aula_2/controllers/ClientsController.ts`: controller que retorna uma lista de clientes.
- `aula_2/infra/authMiddleware.ts`: middleware de autenticação (presente, mas ainda sem implementação).

Como executar:

```bash
cd aula_2
npm install
npm run dev
```

Pontos principais:

- `GET /`: rota de saudação padrão.
- `GET /client`: rota de clientes em `aula_2`.

## Dependências

Cada aula gerencia suas próprias dependências em `package.json`.

- `express`
- `typescript`
- `@types/express`
- `@types/node`
- `ts-node` / `tsx`

## Observações

- A porta utilizada nos projetos é `3333`.
- O código está organizado para demonstrar conceitos de servidor, rotas e controller em Express com TypeScript.
- Use `package.json` de cada aula para instalar e iniciar o projeto correspondente.
