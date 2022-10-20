export declare function GetHaveListFriendsByIdUserDB(id: string): Promise<unknown>;
export declare function SearchFirendsByIdDB(id: string): Promise<unknown>;
export declare function SearchFirendsByNameDB(iduser: string, name: string): Promise<unknown>;
export declare function IsFriendInListDB(idUser: string, idFriend: string): Promise<unknown>;
export declare function insertListFriendsDB(idUser: string, idFriend: string): Promise<unknown>;
export declare function CancelFriendsDB(idUser: string, idFriend: string): Promise<unknown>;
