import HaveListFriends from "../model/HaveListFriends.js";
export default class CTHaveListFriends {
    HaveListFriends: HaveListFriends[];
    constructor();
    private refesh;
    private SetHaveListFriends;
    GetHaveListFriendsByIdUser(idUser: string): Promise<HaveListFriends[]>;
    SearchFirendsById(id: string): Promise<HaveListFriends[]>;
    SearchFirendsByName(iduser: string, name: string): Promise<HaveListFriends[]>;
    IsFriendInList(idUser: string, idFriend: string): Promise<boolean>;
    insertListFriends(idUser: string, idFriend: string): Promise<boolean>;
    CancelFriends(idUser: string, idFriend: string): Promise<boolean>;
}
