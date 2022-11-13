declare enum status {
    offline = 0,
    online = 1
}
export default class Validateuser {
    id: number;
    cookie: string;
    socket: string;
    status: status;
    ab: string;
    time: number;
    constructor();
    setAll(p: any): void;
    Json(): any;
}
export {};
