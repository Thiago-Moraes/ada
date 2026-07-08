### Projeto Grupo 3
## 1. Introdução
Nesse a gente precisa desenvolver uma aplicação simples pra aplicar os conhecimentos adquiridos, incluindo banco de dados.
**Exemplo**: Um sistema de controle de estoque.

## 2. Requisitos
- O sistema deve ter as seguintes funcionalidades:
    - Adicionar produtos
    - Remover produtos
    - Atualizar produtos
    - Buscar produtos
    - Ordenar produtos

## 3. Banco
- O sistema deve ter as seguintes tabelas:
    - products

## 4. Exemplos de Banco

### SQLite
```sql
CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    stock INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```
## 5. Exemplos em TypeScript 

```ts
import Connection from './Connection.ts'

class TodoDAO extends Connection {
    async all() {
        const db = await this.db;
        return db?.all('select * from activities');
    }

    async find(id: number) {
        const db = await this.db;
        return db?.get(`select * from activities where id = ?`, [id]);
    }

    async create(data: { description: string }) {
        const db = await this.db;
        return db?.run(`insert into activities(description) values(?)`, [data.description]);
    }

    async updateStartDate(id: number, data: { startDate: string }) {
        const db = await this.db;
        return db?.run(`update activities set start_date = ? where id = ?`, [data.startDate, id]);
    }

    async updateFinishDate(id: number, data: { finishDate: string }) {
        const db = await this.db;
        return db?.run(`update activities set finish_date = ? where id = ?`, [data.finishDate, id]);
    }
}

export default new TodoDAO();

```
