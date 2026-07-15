import jwt from 'jsonwebtoken';
import type { Request, Response } from 'express';

class ControllerLogin {

    jwt = jwt;

    login(req: Request, resp: Response) {
        const { data } = req.body;

        if (data.user === 'thiago' && data.password === '1234') {

            const token = this.jwt.sign(
                {
                    user: data.user,
                    company: 'Ada tech',
                    function: 'Professor',
                    status: 'active',
                    iat: Date.now()
                },
                process.env.SECRET_KEY!,
                {
                    expiresIn: '1h'
                }
            );

            return resp.status(200).json({ token });
        }

        return resp.status(401).json({ message: "Usuário ou senha inválidos." });
    }
}

export default new ControllerLogin();
