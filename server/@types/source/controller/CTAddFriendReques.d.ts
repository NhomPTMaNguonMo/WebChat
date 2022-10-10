import AddFriendRequest from "../model/AddFriendRequest.js";
export default class CTAddFriendReques {
    addFriendsList: AddFriendRequest[];
    constructor();
    private refesh;
    private setList;
    InAddFriendRequest(idUser: string, idAddFriends: string): Promise<boolean>;
    InsertAddFriendRequest(idUser: string, idAddFriends: string): Promise<boolean>;
    ListAddFriendRequest(idUser: string): Promise<AddFriendRequest[]>;
}
