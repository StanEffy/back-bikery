import { NextFunction, Request, Response } from "express";
declare const _default: (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => (req: Request, res: Response, next: NextFunction) => void;
export default _default;
