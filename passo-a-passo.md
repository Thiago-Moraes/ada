# Passo a Passo: Criando um Projeto Node.js com TypeScript, Express e ES Modules do Zero

Este guia descreve detalhadamente como configurar um ambiente de desenvolvimento do zero, instalar o Node.js e o npm, e estruturar um projeto utilizando TypeScript, Express e importações via ES Modules (ECMAScript).

---

## Índice
1. [Instalação do Node.js e npm](#1-instalação-do-nodejs-e-npm)
2. [Inicialização do Projeto Node.js](#2-inicialização-do-projeto-nodejs)
3. [Instalação e Configuração do TypeScript](#3-instalação-e-configuração-do-typescript)
4. [Configuração do Import via ES Modules (ECMAScript)](#4-configuração-do-import-via-es-modules-ecmascript)
5. [Instalação do Express](#5-instalação-do-express)
6. [Criando e Executando um Servidor Exemplo](#6-criando-e-executando-um-servidor-exemplo)

---

## 1. Instalação do Node.js e npm

Como o Node.js e o npm não estão instalados no computador, o método recomendado (especialmente em sistemas Linux/macOS) é utilizar o **NVM (Node Version Manager)**. O NVM permite instalar, gerenciar e alternar facilmente entre diferentes versões do Node.js.

### Opção A: Instalação via NVM (Recomendado)

1. **Baixe e instale o NVM:**
   Abra o terminal e execute o seguinte comando:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   ```
   *(Nota: Se não tiver o `curl` instalado, instale-o via `sudo apt install curl` no Ubuntu/Debian).*

2. **Carregue o NVM no seu terminal atual:**
   Execute os comandos abaixo ou reinicie o seu terminal:
   ```bash
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   ```

3. **Instale a versão LTS mais recente do Node.js (que já inclui o npm):**
   ```bash
   nvm install --lts
   ```

4. **Verifique se a instalação foi bem-sucedida:**
   ```bash
   node -v
   npm -v
   ```
   Os comandos devem retornar as versões instaladas (ex: `v20.x.x` para o Node e `10.x.x` para o npm).

---

### Opção B: Instalação via Gerenciador de Pacotes do Linux (Debian/Ubuntu)
[Lindk download windows](https://nodejs.org/dist/v24.18.0/node-v24.18.0-x64.msi)

Caso prefira a instalação tradicional direto pelo gerenciador de pacotes:

1. **Atualize a lista de pacotes:**
   ```bash
   sudo apt update
   ```

2. **Instale o Node.js e o npm:**
   ```bash
   sudo apt install nodejs npm -y
   ```

3. **Verifique a instalação:**
   ```bash
   node -v
   npm -v
   ```

---

## opção C: Instalação via pacote msi (windows)
[download pacote msi](https://nodejs.org/dist/v24.18.0/node-v24.18.0-x64.msi)

## 2. Inicialização do Projeto Node.js

Com o Node.js e o npm devidamente instalados, podemos criar nossa pasta de projeto e inicializar o ecossistema do Node.

1. **Crie a pasta do projeto e acesse-a:**
   ```bash
   mkdir meu-projeto-node
   cd meu-projeto-node
   ```

2. **Inicialize o projeto Node.js:**
   Execute o comando a seguir para criar o arquivo gerenciador de dependências `package.json` com as configurações padrão:
   ```bash
   npm init -y
   ```

---

## 3. Instalação e Configuração do TypeScript

Para utilizar TypeScript, precisamos instalar o compilador do TypeScript e as definições de tipo do Node.js como dependências de desenvolvimento.

1. **Instale o TypeScript e ferramentas auxiliares:**
   - `typescript`: O compilador oficial.
   - `@types/node`: Definições de tipo para o ambiente do Node.
   - `ts-node`: Permite executar arquivos TypeScript diretamente sem precisar compilá-los manualmente primeiro.
   
   Execute no terminal:
   ```bash
   npm install -D typescript @types/node ts-node
   ```

2. **Gere o arquivo de configuração do TypeScript (`tsconfig.json`):**
   ```bash
   npx tsc --init
   ```

3. **Configure o `tsconfig.json`:**
   Abra o arquivo `tsconfig.json` gerado na raiz do projeto e ajuste/descomente as seguintes opções essenciais para trabalhar com ES Modules e boas práticas:
   ```json
   {
     "compilerOptions": {
       "target": "ES2022",                          /* Versão do JS gerado */
       "module": "NodeNext",                        /* Define como os módulos serão tratados */
       "moduleResolution": "NodeNext",              /* Resolução de módulos compatível com NodeNext */
       "outDir": "./dist",                          /* Pasta onde os arquivos JS compilados serão salvos */
       "rootDir": "./src",                          /* Pasta de origem do código TypeScript */
       "strict": true,                              /* Habilita checagem estrita de tipos */
       "esModuleInterop": true,                     /* Permite importações padrão de módulos CommonJS */
       "skipLibCheck": true,                        /* Pula checagem de tipos de arquivos de declaração (.d.ts) */
       "forceConsistentCasingInFileNames": true     /* Garante consistência de caixa em nomes de arquivos */
     },
     "include": ["src/**/*"]                        /* Especifica onde estão os arquivos TypeScript */
   }
   ```

---

## 4. Configuração do Import via ES Modules (ECMAScript)

Por padrão, o Node.js utiliza o sistema CommonJS (`require`). Para usar o padrão do ECMAScript (`import`/`export`), siga estes passos:

1. **Atualize o `package.json`:**
   Abra o arquivo `package.json` e adicione a propriedade `"type": "module"` na raiz do objeto JSON:
   ```json
   {
     "name": "meu-projeto-node",
     "version": "1.0.0",
     "type": "module",
     "main": "dist/index.js",
     "scripts": {
       "build": "tsc",
       "start": "node dist/index.js",
       "dev": "node --loader ts-node/esm src/index.ts"
     },
     ...
   }
   ```
   *(Nota: O script `"dev"` utiliza `--loader ts-node/esm` para permitir a execução direta de arquivos `.ts` usando ES Modules).*

---

## 5. Instalação do Express

Agora instalaremos o Express (framework web) e suas respectivas definições de tipo para o TypeScript.

1. **Instale o Express (dependência de produção):**
   ```bash
   npm install express
   ```

2. **Instale os tipos do Express (dependência de desenvolvimento):**
   ```bash
   npm install -D @types/express
   ```

---

## 6. Criando e Executando um Servidor Exemplo

1. **Crie a pasta de código-fonte:**
   ```bash
   mkdir src
   ```

2. **Crie o arquivo principal `src/index.ts`:**
   ```bash
   touch src/index.ts
   ```

3. **Escreva o código do servidor no `src/index.ts`:**
   Abra o arquivo e insira o código abaixo, utilizando a sintaxe de `import` (ES Modules):
   ```typescript
   import express, { Request, Response } from 'express';

   const app = express();
   const PORT = process.env.PORT || 3000;

   // Middleware para ler JSON no corpo das requisições
   app.use(express.json());

   // Rota inicial de teste
   app.get('/', (req: Request, res: Response) => {
     res.json({
       mensagem: "Servidor Express rodando com TypeScript e ES Modules!"
     });
   });

   // Iniciar o servidor
   app.listen(PORT, () => {
     console.log(`[servidor]: Servidor ativo na porta http://localhost:${PORT}`);
   });
   ```

4. **Execute o projeto em modo de desenvolvimento:**
   No terminal, execute o seguinte comando configurado no `package.json`:
   ```bash
   npm run dev
   ```
   Abra o navegador e acesse `http://localhost:3000`. Você verá a resposta em formato JSON!

5. **Compile para produção:**
   Para compilar o código TypeScript em JavaScript puro:
   ```bash
   npm run build
   ```
   Isso criará a pasta `dist` com os arquivos JavaScript correspondentes. Para rodar o código compilado em produção:
   ```bash
   npm run start
   ```