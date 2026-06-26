// M -> Model (Acesso ao BD)
// V -> View (Retorno a visualização)
// C -> Controller (Controllers orquestradores)
// Servico Model, Servico, Acao...

import { Router, type Request, type Response } from 'express';
import ClientsController from '../controllers/ClientsController.ts';
import { log } from 'node:console';
const router = Router();

router.get('/client', (req: Request, resp: Response) => {
    return resp.json(ClientsController.list());
});

//router.get('/:id', ClientsController.findById(id));


export default router;