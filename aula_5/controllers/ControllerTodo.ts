import TodoDao from '../dao/todo.ts';

type Activity = {
    description: string;
}

type UpdateActivityStartDate = {
    startDate: string;
}

type UpdateActivityFinishDate = {
    finishDate: string;
}

class ControllerTodo {

    async list() {
        const data = await TodoDao.all();
        return data;
    }

    async find(id: number) {
        const data = await TodoDao.find(id);
        return data;
    }

    async create(data: Activity) {
        const returnData = await TodoDao.create(data);
        return data;
    }

    async updateActivityStartDate(id: number, data: UpdateActivityStartDate) {
        const returnData = await TodoDao.updateStartDate(id, data);
        return data;
    }

}

export default new ControllerTodo();