import type { NextFunction, Request, Response } from "express";
import BaseMiddleware from "./base/baseMiddleware.ts";

class AdmAccessMiddleware extends BaseMiddleware {

    constructor(req: Request, resp: Response, next: NextFunction) {
        super(req, resp, next);


        try {
            const decoded = this.validate();
            if (decoded.role === 'adm') {
                this.next();
            } else {
                resp.status(401).json({ message: "Unauthorized" });
            }

        } catch (error) {
            resp.status(401).json({ message: "Unauthorized" });
        }
    }
}

export default (req: Request, resp: Response, next: NextFunction) =>
    new AdmAccessMiddleware(req, resp, next);