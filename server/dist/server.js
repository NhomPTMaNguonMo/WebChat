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
import http from "http";
import cookieParser from "cookie-parser";
import __dirname from "./confi.js";
import route from "./route/account.js";
import routeFriends from "./route/friends.js";
import routeBox from "./route/box.js";
import routeMess from "./route/message.js";
import bodyParser from "body-parser";
import { Server } from "socket.io";
import { parse } from "cookie";
import Ctvalidateuser from "./source/controller/Ctvalidateuser.js";
import CTHavelistboxchat from "./source/controller/CTHavelistboxchat.js";
import CTMessage from "./source/controller/CTMessage.js";
var ctmessage = new CTMessage();
var cthavelistboxchat = new CTHavelistboxchat();
var ctvalidateuser = new Ctvalidateuser();
var port = 666;
const app = express();
const server = http.createServer(app);
app.use(express.static(__dirname + "/public"));
const io = new Server(server, {});
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cross-Origin-Resource-Policy", "same-origin");
    next();
});
function Vali(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var s = yield ctvalidateuser.GetValidateUser(req.cookies.id, req.cookies.sercurity);
        if (!s) {
            res.redirect("/acount/sign");
            return;
        }
        next();
    });
}
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var s = yield ctvalidateuser.GetValidateUser(req.cookies.id, req.cookies.sercurity);
    if (!s) {
        res.sendFile(__dirname + "/font/sign.html");
        return;
    }
    res.sendFile(__dirname + "/font/client.html");
}));
app.use("/account", route);
app.use("/friends", Vali, routeFriends);
app.use("/box", Vali, routeBox);
app.use("/mess", Vali, routeMess);
server.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
io.on("connection", (socket) => __awaiter(void 0, void 0, void 0, function* () {
    var cookie = parse(socket.handshake.headers.cookie ? socket.handshake.headers.cookie : "");
    var s = yield ctvalidateuser.GetValidateUser(cookie.id, cookie.sercurity);
    if (!s) {
        socket.emit("ended");
        return;
    }
    io.in(socket.id).socketsJoin(cookie.id);
    console.log("có đi quá");
    yield ctvalidateuser.UpdateStatusInValidateuser(cookie.id, (yield io.in(cookie.id).allSockets()).size);
    socket.on("disconnecting", () => __awaiter(void 0, void 0, void 0, function* () {
        var rooms = socket.rooms;
        rooms.forEach((element) => {
            socket.leave(element);
        });
        console.log(cookie.id);
        yield ctvalidateuser.UpdateStatusInValidateuser(cookie.id, (yield io.in(cookie.id).allSockets()).size);
    }));
    socket.on("sendMess", (data) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(data);
        let check = yield cthavelistboxchat.IsIdUserInBox(cookie.id, data.idBox);
        if (!check) {
            socket.emit("ReqAddFriends", "sai box");
            return;
        }
        yield Promise.all([
            cthavelistboxchat.visualBoxChat(cookie.id, data.idBox, "1"),
            cthavelistboxchat.SetNotSeenInBox(cookie.id, data.idBox),
            ctmessage.InsertContentIn(data.idBox, cookie.id, data.content)
        ])
            .then((v) => {
            if (v[0] && v[2]) {
                console.log("gửi ok");
                socket.emit("ReqAddFriends", "gửi thành công");
            }
            else {
                console.log("có lỗi");
                socket.emit("ReqAddFriends", "lỗi");
            }
        });
    }));
}));
export default io;
