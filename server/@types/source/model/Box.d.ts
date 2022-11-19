import entity from "./interface/entity.js";
export default class Box extends entity {
    idBox: string;
    idUser: number;
    nameUser: string;
    avatar: string;
    status: string;
    constructor();
    setAll(p: any): void;
    json(): any;
}
