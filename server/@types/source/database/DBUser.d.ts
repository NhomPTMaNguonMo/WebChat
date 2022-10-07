import User from "../model/User";
export declare function GetkUserDatabase(account: string): Promise<unknown>;
export declare function InsertNewUserDB(p: User): Promise<unknown>;
export declare function ListUserByNameDB(idUser: string, name: string): Promise<unknown>;
