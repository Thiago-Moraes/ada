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
