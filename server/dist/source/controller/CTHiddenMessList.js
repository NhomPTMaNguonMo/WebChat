var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DeleteHiddenMessbyIdUserDB, InsertHiddenMessToBoxDB, } from "../database/DBHiddenMessList.js";
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
}
//# sourceMappingURL=CTHiddenMessList.js.map