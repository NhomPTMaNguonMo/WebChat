var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DeleteMessbyIdUserDB, GetAllContentByidBoxDB, InsertContentInDB, IsExistMessDB, } from "../database/DBMessage.js";
import message from "../model/message.js";
export default class CTMessage {
    constructor() {
        this.listMess = [];
    }
    GetAllContentByidBox(idBox, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GetAllContentByidBoxDB(idBox, idUser)
                .then((v) => {
                this.setlsMess(v);
            })
                .catch((v) => {
                console.log(v);
            });
            return this.listMess;
        });
    }
    Refesh() {
        this.listMess = [];
    }
    setlsMess(any) {
        this.Refesh();
        let mess;
        for (let i = 0; i < any.length; i++) {
            const element = any[i];
            mess = new message();
            mess.setAll(element);
            this.listMess.push(mess.json());
        }
    }
    InsertContentIn(idBox, idUser, mess) {
        return __awaiter(this, void 0, void 0, function* () {
            yield InsertContentInDB(idBox, idUser, mess)
                .then((v) => {
            })
                .catch((v) => {
                console.log(v);
            });
            return true;
        });
    }
    IsExistMess(idMess) {
        return __awaiter(this, void 0, void 0, function* () {
            var check = false;
            yield IsExistMessDB(idMess)
                .then((v) => {
                if (v.length > 0) {
                    check = true;
                }
            })
                .catch((v) => {
                console.log(v);
            });
            return check;
        });
    }
    DeleteMessbyIdUser(idUser, idMess) {
        return __awaiter(this, void 0, void 0, function* () {
            yield DeleteMessbyIdUserDB(idUser, idMess)
                .catch((v) => {
                console.log("CTMessage.ts");
                console.log(v);
            });
            return true;
        });
    }
}
//# sourceMappingURL=CTMessage.js.map