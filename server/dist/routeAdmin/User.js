var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from "express";
import { valiAdmin } from "../serverAdmin.js";
import CtUsers from "../source/controller/CtUsers.js";
var ctUsers = new CtUsers();
const user = Router();
user.get("/getListUsers/:i", valiAdmin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var index;
    if (req.params.i == undefined) {
        index = 0;
    }
    else {
        try {
            index = parseInt(req.params.i);
        }
        catch (error) {
            index = 0;
            console.log(error);
        }
    }
    var list = yield ctUsers.GetUserLimit(index, 50);
    res.json({ err: false, list });
}));
export default user;
//# sourceMappingURL=User.js.map