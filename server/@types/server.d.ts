import { Request, Response, NextFunction } from "express";
import { Server } from "socket.io";
declare const io: Server<import("socket.io/dist/typed-events.js").DefaultEventsMap, import("socket.io/dist/typed-events.js").DefaultEventsMap, import("socket.io/dist/typed-events.js").DefaultEventsMap, any>;
export declare function Vali(req: Request, res: Response, next: NextFunction): Promise<void>;
export default io;
