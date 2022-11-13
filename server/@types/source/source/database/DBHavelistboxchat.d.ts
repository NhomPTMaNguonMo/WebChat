export declare function UpdateStatusBox(idUser: string, idBox: string, status: string): Promise<unknown>;
export declare function GetIdBoxbyIdUserAndIdFriendDB(idUser: string, idFriend: string): Promise<unknown>;
export declare function InsertIdToNewBoxDB(idUser: string, idBox: string): Promise<unknown>;
export declare function GetIdUserOnlineInBoxDB(idBox: string, idUser: string): Promise<unknown>;
export declare function IsIdUserInBoxDB(idUser: string, idBox: string): Promise<unknown>;
export declare function SetNotSeenInBoxDB(idUser: string, idBox: string): Promise<unknown>;
