import type { NextFunction, Request, Response } from "express";
import BaseMiddleware from "./base/baseMiddleware.ts";

class AuthMiddleware extends BaseMiddleware {

    constructor(req: Request, resp: Response, next: NextFunction) {
        super(req, resp, next);

        const authHeader = req.headers['authorization'] ?? '';
        if (!authHeader) {
            resp.status(401).json({ message: "Unauthorized - Cabecalho não está presente!! - Seu mané..." });
            return;
        }

        // Authorization: Bearer <TOKEN>
        const token = authHeader.split(' ')[1];
        if (!token) {
            resp.status(401).json({ message: "Unauthorized - Token não encontrado" });
            return;
        }

        try {
            const decoded = this.jwt.verify(token, process.env.SECRET_KEY!);
            console.log("Decoded:", decoded);
            next();

        } catch (error) {
            resp.status(401).json({ message: "Unauthorized" });
        }
    }
}

export default (req: Request, resp: Response, next: NextFunction) =>
    new AuthMiddleware(req, resp, next);