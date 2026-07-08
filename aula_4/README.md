# Aula 4: Fundamentos de Bancos de Dados e SQLite

Olá, aluno! Nesta quarta aula, fizemos uma pausa na codificação direta do nosso servidor Express para mergulhar em um conceito central no desenvolvimento de qualquer software profissional: o armazenamento persistente de dados através de **Bancos de Dados Relacionais**.

Estudamos como planejar, modelar e estruturar informações usando o Modelo Entidade-Relacionamento (MER/DER), as regras de ouro de organização de tabelas chamadas **Formas Normais** (1FN, 2FN e 3FN) e como interagir com o banco de dados leve **SQLite** utilizando comandos da linguagem SQL (DDL, DML e DQL). Além disso, vimos a teoria de como preparar o Node.js para conversar com o SQLite usando o pacote `sqlite3`.

---

## 📂 Estrutura do Projeto

Esta aula foi teórica e prática com foco em modelagem e comandos de banco de dados. Abaixo estão os principais arquivos de estudos:

```text
aula_4/
├── introducao.md       # Teoria sobre SGBD, Entidades, Relacionamentos e Formas Normais
├── sqlite.md           # Guia de comandos do SQLite (DDL/DML) e integração básica no Node.js
├── bancodedados.md     # Detalhamento de tipos no SQLite e manipulação avançada (filtros)
├── exercicio_bd.md     # Exercício prático de modelagem para a livraria "SóLivros"
└── image.png           # Exemplo visual de Diagrama de Entidade-Relacionamento (DER)
```

* **`introducao.md`**: Explica o que é um banco de dados, SGBDs famosos e desmistifica a modelagem conceitual e as três principais regras de Normalização de Dados.
* **`sqlite.md`**: Apresenta os comandos Dot (como `.tables` e `.schema`), além de como abrir conexões e executar queries diretamente no código TypeScript/JavaScript.
* **`bancodedados.md`**: Traz exemplos práticos de criação de tabelas, inserção de dados, filtros complexos e consultas refinadas usando ordenações (`ORDER BY`) e paginação (`LIMIT`).
* **`exercicio_bd.md`**: Desafio prático para você modelar um sistema de gerenciamento de estoque para uma livraria, aplicando conceitos de tabelas fortes/fracas e relacionamentos de cardinalidade.

---

## 🛠️ Comandos Utilizados

Como vimos no material de estudos, no terminal do SQLite ou na integração com Node.js, os seguintes recursos são fundamentais:

* `sqlite3 nome_do_banco.db`: Comando do terminal do sistema operacional para iniciar ou criar um banco de dados SQLite.
* `npm install sqlite3`: Instala o driver nativo do SQLite no Node.js para que o JavaScript/TypeScript possa se conectar e rodar consultas.
* `.open nome.db`: Abre um arquivo de banco de dados no terminal interativo do SQLite.
* `.tables`: Comando de sistema do SQLite para listar todas as tabelas criadas no banco de dados ativo.
* `.schema nome_tabela`: Mostra a instrução SQL exata que foi utilizada para criar uma tabela específica.

---

## 🚀 Como Executar a Aplicação

Por se tratar de uma aula de estudos conceituais e comandos SQL, não há um servidor web para iniciar. No entanto, você pode praticar os conceitos da seguinte maneira:

1. Caso tenha o terminal do SQLite instalado em seu computador, abra-o passando o nome do banco que deseja criar:
   ```bash
   sqlite3 biblioteca.db
   ```
2. Dentro do terminal do SQLite, experimente rodar comandos DDL de criação de tabelas e DML de inserção/consulta descritos em `bancodedados.md`. Por exemplo:
   ```sql
   CREATE TABLE usuarios (id INTEGER PRIMARY KEY, nome TEXT);
   INSERT INTO usuarios (nome) VALUES ('Ana Silva');
   SELECT * FROM usuarios;
   ```
3. Digite `.exit` para sair do terminal do SQLite.

---

## 📝 O que aprendemos nesta aula?

* **O que é um SGBD**: A importância de um Sistema Gerenciador de Banco de Dados.
* **Modelagem Entidade-Relacionamento**: A diferença entre Entidades, Atributos, Relacionamentos e como ler a Cardinalidade (1:1, 1:N, N:N).
* **Três Formas Normais (Normalização)**:
  1. **1FN**: Valores devem ser atômicos (sem listas em um único campo).
  2. **2FN**: Campos não-chave devem depender totalmente da chave primária inteira.
  3. **3FN**: Campos não-chave não podem ter dependências indiretas (transitivas) entre si.
* **Comandos Fundamentais SQL**:
  * **DDL**: Definição da estrutura com `CREATE TABLE` e `DROP TABLE`.
  * **DML**: Manipulação com `INSERT`, `UPDATE` e `DELETE`.
  * **DQL**: Consultas e filtros avançados usando `SELECT`, `WHERE`, `ORDER BY` e `LIMIT`.
* **Fundamentos de Conexão no Node.js**: Como estruturar a abertura de banco de dados (`sqlite3.Database()`) e a execução sequencial de comandos com `db.serialize()`.
