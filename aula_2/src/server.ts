import express, {type Request, type Response } from 'express';
import router from '../routes/index.ts';

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(router);

// Nossa primeira  rota
app.get('/', (req: Request, resp: Response ) => {
    return resp.json({data: 'Primeiro retorno'});
})

app.listen(PORT, () => console.log('funcionando'))