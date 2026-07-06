import Connection from './Connection.ts'

class TodoDAO extends Connection {
    async all() {
        const db = await this.db;
        return db?.all('select * from activities');
    }

    async find(id) {
        const db = await this.db;
        return db?.get(`select * from activities where id = ?`, [id]);

    }

    async create(data) {
        /* {
            "data": {
                "description": 'tarefa 1'
            }
        } */

        const db = await this.db;
        return db?.run(`insert into activities(description) values(?)`, [data.description]);
        // "update activities set description = ? where id = ?";
        // "update activities set status = 1, start_date = ? where id = ?";
        // "update activities set status = 2, finish_date = ? where id = ?";
    }
}

export default new TodoDAO();
