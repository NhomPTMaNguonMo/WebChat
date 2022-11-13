import Box from "../model/Box.js";
export declare enum statusBox {
    hidden = "0",
    visual = "1"
}
export default class CTHavelistboxchat {
    listBox: Box[];
    constructor();
    hiddenBoxChat(idUser: string, idBox: string): Promise<boolean>;
    GetIdBoxbyIdUserAndIdFriend(idUser: string, idFriend: string): Promise<Box[]>;
    private setlsBox;
    private Refesh;
    InsertIdToNewBox(idUser: string, idBox: string): Promise<boolean>;
    visualBoxChat(idUser: string, idBox: string, status: string): Promise<boolean>;
    GetIdUserOnlineInBox(idUser: string, idBox: string): Promise<Box[]>;
    IsIdUserInBox(idUser: string, idBox: string): Promise<boolean>;
    SetNotSeenInBox(idUser: string, idBox: string): Promise<boolean>;
}
