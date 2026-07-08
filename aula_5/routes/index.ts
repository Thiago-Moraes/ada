import { Router, type Request, type Response } from 'express';
import ControllerTodo from '../controllers/ControllerTodo.ts';

const router = Router();

router.get('/list', async (req: Request, resp: Response) => {
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
        const returnData = await ControllerTodo.create(data);
        resp.status(201).json(returnData);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ error: 'Internal server error' });
    }
});

export default router;