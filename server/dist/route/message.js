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
import CTMessage from "../source/controller/CTMessage.js";
import CTHavelistboxchat from "../source/controller/CTHavelistboxchat.js";
import CTHiddenMessList from "../source/controller/CTHiddenMessList.js";
var ctHiddenMessList = new CTHiddenMessList();
var ctHavelistboxchat = new CTHavelistboxchat();
var ctMessage = new CTMessage();
const routeMess = express.Router();
// chưa test
routeMess.post("/getAllContent", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var s = req.cookies;
    var idBox = req.body.idBox;
    let list = yield ctMessage.GetAllContentByidBox(idBox, s.id);
    res.json({ err: true, list });
}));
// chưa test
routeMess.post("/hiddenMess", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var sercurity = req.cookies;
    var idMess = req.body.idMess;
    var hiddenMess = yield ctHiddenMessList.GetHiddenMessByIdMessAndIdUser(sercurity.id, idMess);
    if (hiddenMess !== undefined) {
        yield ctHiddenMessList.InsertHiddenMessToBox(sercurity.id, idMess);
        res.json({ mess: "thành công" });
        return;
    }
    res.status(400).json({ mess: "thất bại" });
}));
// chưa test
routeMess.post("/reMoveMess", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var sercurity = req.cookies;
    var idMess = req.body.idMess;
    yield ctHiddenMessList.DeleteHiddenMessbyIdUser(sercurity.id, idMess);
    yield ctMessage.DeleteMessbyIdUser(sercurity.id, idMess);
    res.json({ mess: "xóa thành công" });
}));
export default routeMess;
//# sourceMappingURL=message.js.map