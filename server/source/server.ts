import express, { Request, Response, NextFunction } from "express";
import http from "http";
import cookieParser from "cookie-parser";
import __dirname, { content, hash, validate } from "./confi.js";

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

var ctmessage = new CTMessage();
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

async function Vali(req: Request, res: Response, next: NextFunction) {
  if (validate(req)) {
    next();
    return;
  }
  var sercurity: sercurity = req.cookies;
  var s = await ctvalidateuser.GetValidateUser(
    sercurity.id,
    sercurity.sercurity
  );
  if (!s) {
    res.status(402).end();
    return;
  }
  var date = new Date();
  sercurity.ab = hash(sercurity.sercurity + date.getTime(), 25);
  res.cookie("time", date.getTime(), {
    httpOnly: true
  });
  res.cookie("ab", sercurity.ab, {
    httpOnly: true
  });

  next();
}

app.get("/", async (req, res) => {
  if (validate(req)) {
    res.sendFile(__dirname + "/font/client.html");
    return;
  }
  var sercurity: sercurity = req.cookies;
  var s = await ctvalidateuser.GetValidateUser(
    sercurity.id,
    sercurity.sercurity
  );
  if (!s) {
    res.sendFile(__dirname + "/font/sign.html");
    return;
  }
  var date = new Date();
  sercurity.ab = hash(sercurity.sercurity + date.getTime(), 25);
  res.cookie("time", date.getTime(), {
    httpOnly: true,
  });
  res.cookie("ab", sercurity.ab, {
    httpOnly: true,
  });

  res.sendFile(__dirname + "/font/client.html");
});
app.use("/account", route);
app.use("/friends", Vali, routeFriends);
app.use("/box", Vali, routeBox);
app.use("/mess", Vali, routeMess);

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
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
    await ctvalidateuser.UpdateStatusInValidateuser(
      cookie.id,
      (
        await io.in(cookie.id).allSockets()
      ).size
    );
  });
  socket.on("sendMess", async (data: content) => {
    let check = await cthavelistboxchat.IsIdUserInBox(cookie.id, data.idBox);
    if (!check) {
      socket.emit("ReqAddFriends", "sai box");
      return;
    }
    let v = await Promise.all([
      cthavelistboxchat.visualBoxChat(cookie.id, data.idBox, "1"),
      cthavelistboxchat.SetNotSeenInBox(cookie.id, data.idBox),
      ctmessage.InsertContentIn(data.idBox, cookie.id, data.content),
    ]);
    if (!v[0] && !v[2]) {
      socket.emit("ReqAddFriends", "lỗi");
      return;
    }
    var list = await cthavelistboxchat.GetIdUserOnlineInBox(
      cookie.id,
      data.idBox
    );
    await io
      .in(cookie.id)
      .allSockets()
      .then((v) => {
        v.forEach((idSocket) => {
          if (idSocket != socket.id) {
            socket.to(idSocket).emit("ReqAddFriends", "có thông báo");
          } else {
            socket.emit("ReqAddFriends", "gửi thành công");
          }
        });
      });

    list.forEach((v) => {
      console.log(typeof v.idUser);
      io.in(v.idUser + "").emit("receiveMess", { idFriend: cookie.id, data });
    });
  });
});

export default io;
