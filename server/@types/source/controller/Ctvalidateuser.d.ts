import validateuser from "../model/Validateuser.js";
export default class CTvalidateuser {
    listValidateuser: validateuser[];
    constructor();
    InsertValidateuser(p: validateuser): Promise<boolean>;
    UpdateValidateuser(id: string, socket: string, status: number): Promise<boolean>;
    DeleteValidate(id: string, sercurity: string): Promise<boolean>;
    DeleteValidateAll(id: string): Promise<boolean>;
    GetValidateUser(id: string, cookie: string): Promise<validateuser | undefined>;
}
