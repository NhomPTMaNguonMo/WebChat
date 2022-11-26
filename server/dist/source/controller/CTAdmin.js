var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GetAdminByAccPassDB } from "../database/DBAdmin.js";
import Admin from "../model/admin.js";
export default class CTAdmin {
    refesh() { }
    setList(p) {
        this.refesh();
    }
    GetAdminByAccPass(account, password) {
        return __awaiter(this, void 0, void 0, function* () {
            var admin = undefined;
            yield GetAdminByAccPassDB(account, password)
                .then((v) => {
                if (v.length != undefined && v.length > 0) {
                    admin = new Admin();
                    admin.setAll(v[0]);
                }
            })
                .catch((v) => {
                console.log(v);
            });
            return admin;
        });
    }
}
//# sourceMappingURL=CTAdmin.js.map