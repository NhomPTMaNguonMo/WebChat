var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { InAddFriendRequestDB, InsertAddFriendRequestDB, ListAddFriendRequestDB, } from "../database/DBAddFriendReques.js";
import AddFriendRequest from "../model/AddFriendRequest.js";
export default class CTAddFriendReques {
    constructor() {
        this.addFriendsList = [];
    }
    refesh() {
        this.addFriendsList = [];
    }
    setList(s) {
        console.log(s);
        this.refesh();
        let addFriendRequest;
        for (let i = 0; i < s.length; i++) {
            const element = s[i];
            addFriendRequest = new AddFriendRequest();
            addFriendRequest.setAll(element);
            this.addFriendsList.push(addFriendRequest);
        }
    }
    InAddFriendRequest(idUser, idAddFriends) {
        return __awaiter(this, void 0, void 0, function* () {
            let check = false;
            yield InAddFriendRequestDB(idUser, idAddFriends)
                .then((v) => {
                let s = v;
                if (s.length > 0) {
                    check = true;
                }
                else {
                    check = false;
                }
            })
                .catch((v) => {
                console.log(v);
                check = true;
            });
            return check;
        });
    }
    InsertAddFriendRequest(idUser, idAddFriends) {
        return __awaiter(this, void 0, void 0, function* () {
            var check = false;
            yield InsertAddFriendRequestDB(idUser, idAddFriends)
                .then((v) => {
                check = true;
            })
                .catch((v) => {
                check = false;
            });
            return check;
        });
    }
    ListAddFriendRequest(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            var s;
            s = yield ListAddFriendRequestDB(idUser);
            this.setList(s);
            return this.addFriendsList;
        });
    }
}
