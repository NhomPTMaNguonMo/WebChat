export default class CTHiddenMessList {
    constructor();
    InsertHiddenMessToBox(idUser: string, idMess: string): Promise<boolean>;
    DeleteHiddenMessbyIdUser(idUser: string, idMess: string): Promise<boolean>;
}
