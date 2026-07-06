## Exercicio de BD - API REST

Esse exercício é uma continuação do exercício de banco de dados da aula 4, com o objetivo de adicionar 3 endpoints para atualização de uma atividade, no TODOlist.

- Endpoint de atualização da descrição da atividade
- Endpoint de atualização do status e data de início da atividade
- Endpoint de atualização do status e data de término da atividade

```http
PUT /update_description/:id
{
    description: ""
}
```
```typescript
import { Request, Response } from 'express';
import ControllerTodo from '../controllers/ControllerTodo';

export default async function (req: Request, res: Response) {
    const { id } = req.params;
    const { description } = req.body;
    await ControllerTodo.update_description(id, description);
    res.send('ok');
}
```

