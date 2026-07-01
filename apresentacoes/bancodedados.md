# Comandos Básicos SQLite (DDL e DML)

Este guia contém o mínimo necessário para criar e manipular um banco de dados SQLite. 

*Nota: SQLite não utiliza comandos DCL (Data Control Language) convencionais como `GRANT` ou `REVOKE`, pois é um banco de dados baseado em arquivo (serverless). O controle de acesso é gerenciado pelas permissões do arquivo de banco de dados no próprio sistema operacional. Por isso, focaremos nos comandos DDL e DML solicitados.*

---

## Tipos de Dados no SQLite

O SQLite simplifica os tipos de dados em 5 categorias principais (conhecidas como *Storage Classes* ou Classes de Armazenamento). Entender isso é fundamental para iniciantes:

1. **`NULL`**: Representa a ausência de valor (vazio/nulo).
2. **`INTEGER`**: Um número inteiro, sem casas decimais. Pode ser positivo ou negativo.
   - *Exemplo:* `1`, `42`, `-15`
3. **`REAL`**: Um número real (ponto flutuante), ou seja, um número com casas decimais. 
   - *Exemplo:* `3.14`, `-0.5`, `99.99` (note que usamos ponto, não vírgula).
4. **`TEXT`**: Uma string de texto (cadeia de caracteres). 
   - *Exemplo:* `'João da Silva'`, `'joao@email.com'`, `'1234-5678'`. Sempre escreva textos entre aspas simples.
5. **`BLOB`**: Dados binários brutos (arquivos como imagens, áudios, etc). Menos usado no dia a dia por quem está começando.

> [!TIP]
> **Dica sobre tipos (Type Affinity):** Diferente de outros bancos como MySQL ou PostgreSQL, o SQLite é muito flexível com tipos. Se você tentar criar uma coluna do tipo `VARCHAR(255)` ou `BOOLEAN`, o SQLite não vai dar erro; ele apenas converte isso internamente (ex: trata booleanos como `INTEGER` 0 e 1, e VARCHAR como `TEXT`).

---

## 1. DDL (Data Definition Language) - Definição de Dados

### Criar o Banco de Dados
No SQLite, o banco de dados é criado (ou aberto, se já existir) ao iniciar o SQLite pelo terminal passando o nome do arquivo:
```bash
sqlite3 meu_banco.db
```

### Criar Tabela (`CREATE TABLE`)
Cria uma tabela chamada `usuarios`.
```sql
CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    birth_date TEXT,
    congratulation integer default 0,
    idade INTEGER
);
```

---

## 2. DML (Data Manipulation Language) - Manipulação de Dados

### Inserir Registros (`INSERT`)
Adiciona novos registros à tabela.
```sql
-- Inserindo um único registro
INSERT INTO usuarios (nome, email, idade) 
VALUES ('João Silva', 'joao@email.com', 30);

-- Inserindo múltiplos registros
INSERT INTO usuarios (nome, email, idade) 
VALUES 
    ('Maria Souza', 'maria@email.com', 25),
    ('Pedro Santos', 'pedro@email.com', 40);

-- Insert select
INSERT INTO usuarios (nome, email, idade)
    SELECT nome, email, idade
    FROM usuarios
    WHERE idade >= 30;
```

### Buscar Registros (`SELECT`) e Filtros (`WHERE`)
O comando `SELECT` lê e busca os dados da tabela. A cláusula `WHERE` é usada para criar condições (filtros) sobre quais dados trazer.

**1. Busca Simples (Sem Filtros):**
```sql
-- Buscar todos os registros (linhas) e todas as colunas
SELECT * FROM usuarios;

-- Buscar apenas algumas colunas específicas
SELECT nome, email FROM usuarios;
```

**2. Filtros Simples:**
Usam apenas uma condição por vez, utilizando operadores como `=`, `>`, `<`, `>=`, `<=`, `<> || !=` (diferente) ou `LIKE`.
```sql
-- Busca exata (Igualdade)
SELECT * FROM usuarios WHERE idade = 30;

-- Busca por faixa (Maior ou igual)
SELECT * FROM usuarios WHERE idade >= 18 AND idade <= 30;

-- Busca por padrão de texto (LIKE). O % atua como um "curinga"
-- Vai buscar todo mundo cujo nome começa com "João"
SELECT * FROM usuarios WHERE nome LIKE '%João%';
```

**3. Filtros Compostos (`AND` e `OR`):**
Servem para juntar duas ou mais regras no mesmo filtro.
```sql
-- Operador AND (E): TODAS as condições precisam ser verdadeiras
-- Busca quem é maior de idade E tem email do gmail
SELECT * FROM usuarios 
WHERE idade >= 18 AND email LIKE '%@gmail.com';

-- Operador OR (OU): Pelo menos UMA das condições precisa ser verdadeira
-- Busca quem tem menos de 18 anos OU quem se chama Pedro
SELECT * FROM usuarios 
WHERE idade < 18 OR nome = 'Pedro Santos';

-- Usando parênteses para organizar a ordem das regras (mesma lógica da matemática)
SELECT * FROM usuarios 
WHERE (idade >= 20 AND idade <= 30) OR (nome = 'Admin');
-- idade = 29
-- nome = 'Thiago Moraes'
```

### Atualizar Registros (`UPDATE`)
Modifica dados existentes na tabela. 
> [!WARNING]
> **Atenção:** Sempre use a cláusula `WHERE` no `UPDATE`. Caso contrário, todos os registros da tabela serão atualizados.

```sql
UPDATE usuarios 
SET congratulation = 1 
WHERE birth_date >= DATE('now', '-7 day');
```

### Excluir Registros (`DELETE`)
Remove registros da tabela.
> [!WARNING]
> **Atenção:** Sempre use a cláusula `WHERE` no `DELETE`. Caso contrário, todos os registros da tabela serão apagados.

```sql
DELETE FROM usuarios WHERE id = 3;
```
