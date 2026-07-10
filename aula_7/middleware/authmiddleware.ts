import type { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export default function (req: Request, resp: Response, next: NextFunction) {

    const authHeader = req.headers['authorization'] ?? '';
    if (!authHeader) {
        return resp.status(401).json({ message: "Unauthorized - Cabecalho não está presente!! - Seu mané..." });
    }

    // Authorization: Bearer <TOKEN>
    const token = authHeader.split(' ')[1];
    if (!token) {
        return resp.status(401).json({ message: "Unauthorized - Token não encontrado" });
    }


    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY!);
        console.log("Decoded:", decoded);
        next();

    } catch (error) {
        return resp.status(401).json({ message: "Unauthorized" });
    }

}