import entity from "./interface/entity.js";
export default class Account extends entity {
    account: string;
    password: string;
    constructor();
    setAll(d: any): void;
    getAccount(): string;
    getPassword(): string;
    setAccount(v: string): void;
    setPassord(v: string): void;
    json(): any;
}
