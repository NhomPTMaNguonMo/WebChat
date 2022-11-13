import { result } from "../../confi.js";
import User from "../model/User.js";
export default class ControllerUser {
    rt: result;
    user: User | undefined;
    listUser: User[];
    constructor();
    GetUser(account: string): Promise<User | undefined>;
    InsertNewUser(p: User): Promise<boolean>;
    private reFresh;
    private SetlistUser;
    SearchListUserByName(idUser: string, name: string): Promise<User[]>;
    GetUserById(idUser: string): Promise<User | undefined>;
}
