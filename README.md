# Ada: Curso de Node.js, TypeScript e Express

Olá, aluno! Seja muito bem-vindo ao repositório do curso **Ada**. Este material foi planejado e estruturado cuidadosamente para guiar você desde a criação do seu primeiríssimo servidor HTTP em Node.js com TypeScript, passando pela organização profissional de código com o padrão MVC, até a persistência de dados em um banco de dados relacional SQLite de forma totalmente integrada a uma API REST.

Aqui você encontrará projetos práticos divididos por aulas, materiais conceituais e guias de configuração passo a passo para apoiar o seu aprendizado.

---

## 📂 Estrutura do Repositório

O projeto é organizado nas seguintes pastas e arquivos de apoio:

```text
Ada/
├── apresentacoes/       # Slides das aulas em formato PPTX para apoio teórico
├── aula_1/              # Projeto inicial: Servidor Express simples em TypeScript
├── aula_2/              # Projeto estruturado: Organização de rotas, controllers e padrão MVC
├── aula_3/              # Projeto configurado: Uso de variáveis de ambiente com Dotenv
├── aula_4/              # Material conceitual: Fundamentos de Bancos de Dados e comandos SQLite
├── aula_5/              # Projeto com persistência: Integração do SQLite e camada DAO
├── aula_6/              # Projeto estruturado com Entidades de domínio e autovalidação de dados
├── passo-a-passo.md     # Guia detalhado para configurar o ambiente Node/TS do absoluto zero
└── prompt_gerador_readme.md # Instruções e template para estruturação dos READMEs
```

---

## 🗺️ Trilha de Aprendizado

Navegue por cada aula para aprender os conceitos práticos correspondentes:

1. **[Aula 1: Servidor Express Básico com TypeScript](./aula_1)**: Entenda o protocolo HTTP, configure o ambiente com `tsconfig.json` e inicialize um servidor ouvindo requisições na porta `3333`.
2. **[Aula 2: Introdução ao Padrão MVC e Roteamento](./aula_2)**: Descubra como estruturar sua aplicação de forma profissional usando controladores (`Controllers`), roteadores modulares (`Router`) e monitoramento em tempo real com `tsx watch`.
3. **[Aula 3: Configuração de Ambiente com Dotenv](./aula_3)**: Aprenda a proteger credenciais e configurar portas dinâmicas de forma segura isolando configurações locais em um arquivo `.env`.
4. **[Aula 4: Fundamentos de Bancos de Dados e SQLite](./aula_4)**: Domine a teoria de modelagem de dados (MER/DER), as regras de Normalização de Dados (1FN, 2FN e 3FN) e aprenda os principais comandos SQL (DDL, DML e DQL).
5. **[Aula 5: Persistência de Dados com SQLite](./aula_5)**: Integre a API Express a um banco de dados real. Aprenda o padrão DAO (Data Access Object) para efetuar buscas, listagens, inserções de tarefas e endpoints de atualização (`PUT`).
6. **[Aula 6: Validação de Regras de Negócio com Entidades](./aula_6)**: Entenda como proteger a integridade do banco de dados centralizando regras de negócio em classes/Entidades auto-validáveis (como `Activity`).

---

## 🛠️ Requisitos e Ferramentas Globais

Cada projeto possui suas próprias dependências locais gerenciadas pelo `package.json`, mas para iniciar, você precisará do **Node.js** instalado em sua máquina.

* Caso precise de ajuda para instalar o Node.js, configurar o TypeScript ou entender como iniciar um projeto do absoluto zero, consulte o guia detalhado **[passo-a-passo.md](./passo-a-passo.md)**.

---

## 🚀 Como Executar Qualquer Aula

Cada diretório de aula (`aula_1` a `aula_6`, exceto a aula 4 que é conceitual) é um projeto independente. Para executá-lo:

1. Acesse o diretório da aula desejada:
   ```bash
   cd aula_x
   ```
2. Instale as dependências locais:
   ```bash
   npm install
   ```
3. (Se aplicável) Configure o arquivo `.env` com base no arquivo `.env.example` ou instruções da aula.
4. Execute o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

Bons estudos e que o aprendizado seja incrível! Se tiver dúvidas, consulte os arquivos `README.md` detalhados dentro da pasta de cada aula.
