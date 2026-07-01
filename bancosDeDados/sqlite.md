Os comandos básicos do SQLite utilizam a linguagem SQL padrão para criar, gerenciar e consultar bases de dados.
Eles funcionam diretamente no terminal do SQLite ou dentro de arquivos .sql no VS Code.

Aqui estão os comandos fundamentais divididos por categoria:

## Comandos de Sistema (Dot Commands)
Estes comandos gerenciam o ambiente do terminal SQLite e são sempre precedidos por um ponto (.).

- .open nome_do_banco.db: Abre ou cria um arquivo de banco de dados.
- .tables: Lista todas as tabelas existentes no banco.
- .schema nome_da_tabela: Mostra a estrutura de criação de uma tabela específica.
- .mode box: Melhora a visualização das tabelas no terminal (formato de caixa).
- .exit: Fecha a linha de comando do SQLite.

## Definição de Dados (DDL)Comandos para criar, alterar e deletar a estrutura das tabelas.

CREATE TABLE: Cria uma nova tabela e define suas colunas e tipos de dados.sql
```
CREATE TABLE <usuarios> (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```
DROP TABLE: Exclui uma tabela e todos os seus dados permanentemente.sql
```
DROP TABLE usuarios;
```
## Manipulação de Dados (DML)
Comandos para inserir, modificar e remover as informações salvas.

INSERT INTO: Insere um novo registro na tabela.sql
```
INSERT INTO usuarios (nome, email) VALUES ('Ana', 'ana@email.com');
```

UPDATE: Atualiza dados existentes (use sempre com WHERE para não alterar a tabela inteira).sql
```
UPDATE usuarios SET
    nome = 'Ana Silva',
    email = 'ana@email.com.br'
WHERE created_at = '2026-06-29';
```
DELETE FROM: Apaga registros específicos.sql
```
DELETE FROM usuarios WHERE id = 1;
```
## Consulta de Dados (DQL)
Comandos para buscar e filtrar as informações do banco.

SELECT: Seleciona colunas e registros.sql
```
SELECT * FROM usuarios; -- Busca todos os dados
SELECT nome FROM usuarios WHERE id > 5; -- Filtra por condição
```
ORDER BY: Ordena o resultado por uma coluna (ex: ASC para crescente, DESC para decrescente).
```
ORDER BY nome ASC;
```
LIMIT: Restringe o número de linhas retornadas na consulta.
```
LIMIT 10;
```

## Como utilizar
Os comandos acima funcionam diretamente no terminal do SQLite ou dentro de arquivos .sql no VS Code.

## No nodejs
No nodejs, os comandos acima funcionam da mesma forma, mas são executados através de funções do pacote sqlite3.

## Instalacao do sqlite3 no nodejs
```
npm install sqlite3
```

## Abrindo o banco de dados no nodejs
```
import * as sqlite3 from 'sqlite3';
// Ativa o modo verbose para mensagens de depuração mais detalhadas
const sqlite3Client = sqlite3.verbose();
// Abre o banco de dados (cria se não existir)
const db = new sqlite3Client.Database('./minha_base.db', (err: Error | null) => {
    if (err) {
        console.error('Erro ao abrir o banco:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite!');
    }
});
```

## Criando uma tabela no nodejs
```
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT UNIQUE
    )`);
});
```

## Inserindo dados no nodejs
```
db.run(`INSERT INTO usuarios (nome, email) VALUES (?, ?)`, ['Ana', 'ana@email.com'], function (err) {
    if (err) {
        console.error('Erro ao inserir:', err.message);
    } else {
        console.log(`Registro inserido com ID: ${this.lastID}`);
    }
});
```

## Buscando dados no nodejs
```
db.all(`SELECT * FROM usuarios`, [], (err, rows) => {
    if (err) {
        console.error('Erro ao buscar:', err.message);
    } else {
        rows.forEach((row) => {
            console.log(row);
        });
    }
});
```

## Fechando a conexão
```
db.close((err) => {
    if (err) {
        console.error('Erro ao fechar:', err.message);
    } else {
        console.log('Conexão fechada.');
    }
});
```

## Exemplo completo de uso
```
const sqlite3 = require('sqlite3').verbose();

// Abre o banco de dados
const db = new sqlite3.Database('./minha_base.db', (err) => {
    if (err) {
        return console.error('Erro ao abrir o banco:', err.message);
    }
    console.log('Conectado ao banco de dados SQLite!');
});

// Criar tabela
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT UNIQUE
    )`);

    // Inserir dados
    db.run(`INSERT INTO usuarios (nome, email) VALUES (?, ?)`, ['Ana', 'ana@email.com'], function (err) {
        if (err) {
            return console.error('Erro ao inserir:', err.message);
        }
        console.log(`Registro inserido com ID: ${this.lastID}`);
    });

    // Buscar dados
    db.all(`SELECT * FROM usuarios`, [], (err, rows) => {
        if (err) {
            return console.error('Erro ao buscar:', err.message);
        }
        rows.forEach((row) => {
            console.log(row);
        });
    });
});

// Fechar conexão
db.close((err) => {
    if (err) {
        return console.error('Erro ao fechar:', err.message);
    }
    console.log('Conexão fechada.');
});
```
