import { Router, type Request, type Response } from 'express';
import ControllerTodo from '../controllers/ControllerTodo.ts';
import ControllerLogin from '../controllers/ControllerLogin.ts';
import Activity from '../Entities/Activities.ts';
import authmiddleware from '../middleware/authmiddleware.ts';

const router = Router();

router.post('/login', (req: Request, resp: Response) => {
    return ControllerLogin.login(req, resp);
});


router.get('/list', authmiddleware, async (req: Request, resp: Response) => {
    try {
        const data = await ControllerTodo.list();
        resp.json(data);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/find/:id', async (req: Request, resp: Response) => {
    try {
        const id = Number(req.params.id);
        const data = await ControllerTodo.find(id);
        resp.json(data);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/create', async (req: Request, resp: Response) => {
    try {
        const { data } = req.body;
        const activityData = new Activity(data.id, data.description, data.start_date, data.end_date, null);
        const returnData = await ControllerTodo.create(activityData);
        resp.status(201).json(returnData);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ error: 'Internal server error' });
    }
});

export default router;