# Aula 2: Introdução ao Padrão MVC e Roteamento

Olá, aluno! Nesta segunda aula, avançamos na organização e modularização do nosso projeto backend. À medida que a aplicação cresce, manter todo o código em um único arquivo se torna inviável. Por isso, introduzimos o padrão de arquitetura **MVC (Model-View-Controller)** de forma simplificada, organizando nosso código em pastas especializadas.

Aprendemos a separar a escuta do servidor, o roteamento das requisições e a lógica de negócios responsável por processar e retornar os dados (representada pelo Controller). Além disso, passamos a utilizar a ferramenta **tsx** que agiliza o desenvolvimento ao reiniciar o servidor automaticamente a cada alteração de código.

---

## 📂 Estrutura do Projeto

Abaixo apresentagem a árvore de diretórios e arquivos desta aula:

```text
aula_2/
├── controllers/
│   └── ClientsController.ts  # Controla a lógica de negócios da entidade de clientes
├── dao/                      # Camada reservada para o acesso a dados (Data Access Object)
├── infra/
│   └── authMiddleware.ts     # Esboço para futuramente interceptar e validar requisições
├── routes/
│   └── index.ts              # Define e gerencia todas as rotas/endpoints disponíveis
├── src/
│   └── server.ts             # Inicialização do Express e acoplamento das rotas
├── package.json              # Configurações do projeto e scripts de execução
├── tsconfig.json             # Ajustes do compilador TypeScript
└── package-lock.json         # Versões exatas das dependências instaladas
```

* **`routes/index.ts`**: Utiliza o `Router` do Express para centralizar todos os caminhos (endpoints) expostos pela API, como a rota `/client`.
* **`controllers/ClientsController.ts`**: Classe responsável por conter a lógica de listagem de clientes. Ela prepara os dados brutos e os devolve para o roteador.
* **`infra/authMiddleware.ts`**: Pasta destinada a configurações de infraestrutura e segurança (como middlewares).

---

## 🛠️ Comandos Utilizados

* `npm install`: Instala as dependências especificadas no `package.json`, incluindo a nova ferramenta `tsx` utilizada em ambiente de desenvolvimento.
* `npm run dev`: Inicia o servidor em modo de observação (`tsx watch`). Qualquer alteração salva nos arquivos reiniciará o servidor automaticamente de forma instantânea.

---

## 🚀 Como Executar a Aplicação

Siga o passo a passo para rodar o projeto localmente:

1. Navegue até a pasta desta aula:
   ```bash
   cd aula_2
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor em modo de desenvolvimento com recarregamento automático:
   ```bash
   npm run dev
   ```

4. A aplicação estará ativa em `http://localhost:3333`. Agora você possui duas rotas funcionais:
   * Acesse `GET http://localhost:3333/` para ver a mensagem padrão:
     ```json
     {
       "data": "Primeiro retorno"
     }
     ```
   * Acesse `GET http://localhost:3333/client` para ver a lista de clientes gerenciada pelo Controller:
     ```json
     [
       { "id": 1, "name": "Thiago" },
       { "id": 2, "name": "Cyntia" },
       { "id": 3, "name": "Cecilia" },
       { "id": 4, "name": "Thomas" }
     ]
     ```

---

## 📝 O que aprendemos nesta aula?

* **Padrão de Arquitetura MVC (Simplificado)**: O conceito de separação de responsabilidades no backend (divisão entre rotas e controladores).
* **Roteamento Modular com Express**: Criação e exportação de instâncias de `Router()` para estruturar endpoints limpos em múltiplos arquivos.
* **Criação de Controllers**: Como estruturar uma classe controladora para orquestrar o envio de respostas e organizar a lógica de cada rota.
* **Desenvolvimento Ágil com `tsx`**: Uso do `tsx watch` para monitorar alterações em tempo real e evitar a reinicialização manual do servidor.
* **Estruturação de Pastas**: Criação de diretórios específicos (`controllers`, `routes`, `dao`, `infra`) para manter o código escalável.
