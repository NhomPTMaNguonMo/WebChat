export declare function GetAllContentByidBoxDB(idBox: string, idUser: string): Promise<unknown>;
export declare function InsertContentInDB(idBox: string, idUser: string, mess: string): Promise<unknown>;
export declare function IsMessInBoxDB(idBox: string, idMess: string): Promise<unknown>;
export declare function DeleteMessbyIdUserDB(idUser: string, idMess: string): Promise<unknown>;
