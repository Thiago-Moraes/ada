import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

class BaseMiddleware {

    jwt = jwt;
    req: Request;
    resp: Response;
    next: NextFunction;
    token: string;

    constructor(req: Request, resp: Response, next: NextFunction) {
        this.req = req;
        this.resp = resp;
        this.next = next;
        this.token = ''
    }

    validate() {
        const authHeader = this.req.headers['authorization'] ?? '';
        if (!authHeader) {
            this.resp.status(401).json({ message: "Unauthorized - Cabecalho não está presente!! - Seu mané..." });
            return;
        }

        // Authorization: Bearer <TOKEN>
        const token = authHeader.split(' ')[1];
        if (!this.token) {
            this.resp.status(401).json({ message: "Unauthorized - Token não encontrado" });
            return;
        }

        this.token = this.token;

        return this.jwt.verify(this.token, process.env.SECRET_KEY!);
    }
}

export default BaseMiddleware;