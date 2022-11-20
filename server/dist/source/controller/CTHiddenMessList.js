var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DeleteHiddenMessbyIdUserDB, GetHiddenMessByIdMessAndIdUserDB, InsertHiddenMessToBoxDB, } from "../database/DBHiddenMessList.js";
import HiddenMess from "../model/hiddenMess.js";
export default class CTHiddenMessList {
    constructor() { }
    InsertHiddenMessToBox(idUser, idMess) {
        return __awaiter(this, void 0, void 0, function* () {
            yield InsertHiddenMessToBoxDB(idUser, idMess).catch((v) => {
                console.log(v);
            });
            return true;
        });
    }
    DeleteHiddenMessbyIdUser(idUser, idMess) {
        return __awaiter(this, void 0, void 0, function* () {
            yield DeleteHiddenMessbyIdUserDB(idUser, idMess).catch((v) => {
                console.log(v);
            });
            return true;
        });
    }
    GetHiddenMessByIdMessAndIdUser(idUser, idMess) {
        return __awaiter(this, void 0, void 0, function* () {
            var hiddenmess = undefined;
            var s;
            yield GetHiddenMessByIdMessAndIdUserDB(idUser, idMess)
                .then((v) => {
                s = v;
            })
                .catch((v) => {
                s = undefined;
            });
            if (s != undefined && s.length > 0) {
                hiddenmess = new HiddenMess();
                hiddenmess.setAll(s[0]);
            }
            return hiddenmess;
        });
    }
}
//# sourceMappingURL=CTHiddenMessList.js.map