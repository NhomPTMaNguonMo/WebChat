import express, { Request, Response, NextFunction } from "express";
import http from "http";
import cookieParser from "cookie-parser";
import __dirname, { content } from "./confi.js";

import route from "./route/account.js";
import routeFriends from "./route/friends.js";
import routeBox from "./route/box.js";
import routeMess from "./route/message.js";

import bodyParser from "body-parser";
import { sercurity } from "./confi.js";
import { Server } from "socket.io";
import { parse } from "cookie";

import Ctvalidateuser from "./source/controller/Ctvalidateuser.js";
import CTHavelistboxchat from "./source/controller/CTHavelistboxchat.js";
import CTMessage from "./source/controller/CTMessage.js";

var ctmessage=new CTMessage();
var cthavelistboxchat = new CTHavelistboxchat();
var ctvalidateuser = new Ctvalidateuser();

var port = 666;
const app: express.Express = express();
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
async function Vali(req: Request, res: Response, next: NextFunction) {
  var s = await ctvalidateuser.GetValidateUser(
    req.cookies.id,
    req.cookies.sercurity
  );
  if (!s) {
    res.redirect("/acount/sign");
    return;
  }
  next();
}
app.get("/", async (req, res) => {
  var s = await ctvalidateuser.GetValidateUser(
    req.cookies.id,
    req.cookies.sercurity
  );
  if (!s) {
    res.sendFile(__dirname + "/font/sign.html");
    return;
  }
  res.sendFile(__dirname + "/font/client.html");
});
app.use("/account", route);
app.use("/friends", Vali, routeFriends);
app.use("/box", Vali, routeBox);
app.use("/mess",Vali,routeMess);

server.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
io.on("connection", async (socket) => {
  var cookie: sercurity | any = parse(
    socket.handshake.headers.cookie ? socket.handshake.headers.cookie : ""
  );
  var s = await ctvalidateuser.GetValidateUser(cookie.id, cookie.sercurity);
  if (!s) {
    socket.emit("ended");
    return;
  }
  io.in(socket.id).socketsJoin(cookie.id);
  console.log("có đi quá");
  await ctvalidateuser.UpdateStatusInValidateuser(
    cookie.id,
    (
      await io.in(cookie.id).allSockets()
    ).size
  );
  socket.on("disconnecting", async () => {
    var rooms = socket.rooms;
    rooms.forEach((element) => {
      socket.leave(element);
    });
    console.log(cookie.id);
    await ctvalidateuser.UpdateStatusInValidateuser(
      cookie.id,
      (
        await io.in(cookie.id).allSockets()
      ).size
    );
  });
  socket.on("sendMess", async (data: content) => {
    console.log(data)
    let check = await cthavelistboxchat.IsIdUserInBox(cookie.id, data.idBox);
    if (!check) {
      socket.emit("ReqAddFriends","sai box")
      return;
    }
    await Promise.all([
      cthavelistboxchat.visualBoxChat(cookie.id,data.idBox,"1"),
      cthavelistboxchat.SetNotSeenInBox(cookie.id, data.idBox),
      ctmessage.InsertContentIn(data.idBox,cookie.id,data.content)
    ])
    .then((v)=>{
      if (v[0] && v[2]) {
        console.log("gửi ok")
        socket.emit("ReqAddFriends","gửi thành công")
      }
      else{
        console.log("có lỗi")
        socket.emit("ReqAddFriends","lỗi")
      }
    })
  });
});

export default io;
