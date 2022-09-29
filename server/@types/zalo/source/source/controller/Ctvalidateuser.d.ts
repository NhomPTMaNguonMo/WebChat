import validateuser from "../model/Validateuser.js";
export default class CTvalidateuser {
    listValidateuser: validateuser[];
    constructor();
    InsertValidateuser(p: validateuser): Promise<boolean>;
    UpdateValidateuser(id: string, socket: string, status: number): Promise<boolean>;
}
