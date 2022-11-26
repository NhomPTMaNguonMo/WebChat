import HiddenMess from "../model/HiddenMess.js";
export default class CTHiddenMessList {
    constructor();
    InsertHiddenMessToBox(idUser: string, idMess: string): Promise<boolean>;
    DeleteHiddenMessbyIdUser(idUser: string, idMess: string): Promise<boolean>;
    GetHiddenMessByIdMessAndIdUser(idUser: string, idMess: string): Promise<HiddenMess | undefined>;
}
