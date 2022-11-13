import temporaryuser from "../model/temporaryuser.js";
export default class CTtemporaryuser {
    list: any;
    constructor();
    InsertNew(tem: temporaryuser): boolean;
    getTemporaryuser(account: string): temporaryuser;
    fillter(): Promise<unknown>;
    getAll(): void;
    removeTemporaryuser(account: string): void;
}
