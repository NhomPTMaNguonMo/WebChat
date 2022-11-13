import Account from "../model/Account.js";
export declare function GetAccoutDatabase(p: Account): Promise<unknown>;
export declare function InsertAccountDB(p: Account): Promise<unknown>;
export declare function UpdatePasswordDB(account: string, password: string): Promise<unknown>;
export declare function GetAccoutByIdDB(id: string): Promise<unknown>;
