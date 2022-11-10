import User from "./User.js";
export default class temporaryuser extends User {
    password: string;
    valiCode: string;
    CreatedTime: Date;
    constructor();
    setAll(d: any): void;
    json(): any;
}
