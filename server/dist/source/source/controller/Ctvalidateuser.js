var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { InsertValidateuserBD, UpdateValidateuserBD } from "../database/DBvalidateuser.js";
export default class CTvalidateuser {
    constructor() {
        this.listValidateuser = [];
    }
    InsertValidateuser(p) {
        return __awaiter(this, void 0, void 0, function* () {
            var rt = true;
            yield InsertValidateuserBD(p)
                .catch((v) => {
                console.log(v);
                rt = false;
            })
                .then((v) => {
                console.log(v);
            });
            return rt;
        });
    }
    UpdateValidateuser(id, socket, status) {
        return __awaiter(this, void 0, void 0, function* () {
            var rt = true;
            yield UpdateValidateuserBD(id, socket, status)
                .catch((v) => {
                console.log(v);
                rt = false;
            });
            return rt;
        });
    }
}
