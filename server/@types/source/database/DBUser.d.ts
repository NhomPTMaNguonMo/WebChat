import User from "../model/User";
export declare function GetkUserDatabase(account: string): Promise<unknown>;
export declare function InsertNewUserDB(p: User): Promise<unknown>;
export declare function ListUserByNameDB(idUser: string, name: string): Promise<unknown>;
export declare function GetUserByIdDB(idUser: string): Promise<unknown>;
export declare function GetUserLimitDB(index: number, limit: number): Promise<unknown>;
export declare function SumUserDB(): Promise<unknown>;
