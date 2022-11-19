import entity from "./interface/entity.js";
export default class User extends entity {
    id: number;
    account: string;
    nameUser: string;
    status: number;
    avatar: string;
    sex: string;
    birthday: string | undefined;
    constructor();
    setAll(d: any): void;
    json(): any;
}
