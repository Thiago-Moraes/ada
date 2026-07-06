import TodoDao from '../dao/todo.ts';

class ControllerTodo {

    async list() {
        const data = await TodoDao.all();
        return data;
    }

    async find(id) {
        const data = await TodoDao.find(id);
        return data;
    }

    async create(data) {
        const returnData = await TodoDao.create(data);

        return data;
    }

}

export default new ControllerTodo();