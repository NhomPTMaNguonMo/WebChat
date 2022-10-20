import Box from "../model/Box.js";
declare enum type {
    noFriend = "0",
    Friend = "1"
}
export default class CTBox {
    lsBox: Box[];
    gettype(): typeof type;
    constructor();
    private Refesh;
    getAllBoxByIdUser(idUser: string): Promise<boolean>;
    insertNewBox(): Promise<boolean>;
    private setlsBox;
    UpdateBoxType(idBox: string, type: string): Promise<boolean>;
    GetEmptyBox(): Promise<Box[]>;
}
export {};
