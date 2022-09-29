declare enum status {
    offline = 0,
    online = 1
}
export default class Validateuser {
    id: string;
    cookie: string;
    socket: string;
    status: status;
    constructor();
    setAll(p: any): void;
    Json(): {
        id: string;
        cookie: string;
        socket: string;
        status: status;
    };
}
export {};
