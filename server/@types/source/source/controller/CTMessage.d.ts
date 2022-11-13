import message from "../model/message.js";
export default class CTMessage {
    listMess: message[];
    constructor();
    GetAllContentByidBox(idBox: string, idUser: string): Promise<message[]>;
    private Refesh;
    private setlsMess;
    InsertContentIn(idBox: string, idUser: string, mess: string): Promise<boolean>;
}
