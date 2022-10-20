import validateuser from "../model/Validateuser.js";
export declare function InsertValidateuserBD(p: validateuser): Promise<unknown>;
export declare function UpdateStatusInValidateuserBD(id: string, status: number): Promise<unknown>;
export declare function GetValidateUserBD(id: string, cookie: string): Promise<unknown>;
export declare function DeleteValidateDB(id: string, cookie: string): Promise<unknown>;
export declare function DeleteValidateAllDB(id: string): Promise<unknown>;
