import AddFriendReques from "../model/AddFriendReques";
export default class CTAddFriendReques {
    addFriendsList: AddFriendReques[];
    constructor();
    InAddFriendRequest(idUser: string, idAddFriends: string): Promise<boolean>;
    InsertAddFriendRequest(idUser: string, idAddFriends: string): Promise<boolean>;
}
