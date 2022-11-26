var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import CTAdmin from "../source/controller/CTAdmin.js";
import CTUer from "../source/controller/CtUsers.js";
import { clearCookie, hash } from "../confi.js";
var ctUsers = new CTUer();
var ctAdmin = new CTAdmin();
const account = express.Router();
account.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    clearCookie(res);
    var account = req.body.account;
    var password = req.body.password;
    var admin = yield ctAdmin.GetAdminByAccPass(account, password);
    if (admin == undefined) {
        res.json({ err: true, mess: "không thể đăng nhập" });
        return;
    }
    var list = yield ctUsers.GetUserLimit(0, 100);
    var date = new Date();
    var a = hash(("" + date.getTime() + admin), 10);
    var b = hash(a, 10);
    var optin = { httpOnly: true, maxAge: 1000 * 60 * 60 * 5 };
    res.cookie("time", date.getTime(), optin);
    res.cookie("a", a, optin);
    res.cookie("b", b, optin);
    res.send({ err: false, list });
}));
export default account;
//# sourceMappingURL=account.js.map