import validateuser from "../model/Validateuser.js";
export declare function InsertValidateuserBD(p: validateuser): Promise<unknown>;
export declare function UpdateValidateuserBD(id: string, socket: string, status: number): Promise<unknown>;
export declare function GetValidateUserBD(cookie: string): void;
