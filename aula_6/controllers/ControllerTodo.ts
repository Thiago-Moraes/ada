import TodoDao from '../dao/todo.ts';
import Activity from '../Entities/Activities.ts';

class ControllerTodo {

    async list() {
        const data = await TodoDao.all();
        return data;
    }

    async find(id: number) {
        const data = await TodoDao.find(id);
        return data;
    }

    async create(activity: Activity) {
        const returnData = await TodoDao.create(activity);
        return activity;
    }

    /*async updateActivityStartDate(id: number, data: UpdateActivityStartDate) {
        const returnData = await TodoDao.updateStartDate(id, data);
        return data;
    }*/

}

export default new ControllerTodo();