import { result } from "../../confi.js";
import User from "../model/User.js";
import CT from "./CT.js";
export default class ControllerUser implements CT {
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
    GetUserLimit(index: number, limit: number): Promise<User[] | undefined>;
    refesh(): void;
    setList(p: []): void;
}
