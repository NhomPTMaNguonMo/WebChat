import express, { Request, Response } from "express";
import __dirname from "../font/init.js";
import {
  hash,
  postRegister,
  sercurity,
  UnknownObject,
  validatedate,
  validateEmail,
} from "../confi.js";
import CTAddFriendReques from "../source/controller/CTAddFriendReques.js";

import CTHaveListFriends from "../source/controller/CThaveLsitFriend.js";
import CTUsers from "../source/controller/CtUsers.js";
import HaveListFriends from "../source/model/HaveListFriends.js";
import User from "../source/model/User.js";
import io from "../server.js";

var cthaveLsitFriend = new CTHaveListFriends();
var ctAddFriendReques = new CTAddFriendReques();
var ctUser = new CTUsers();
const routeFriends: express.Router = express.Router();

routeFriends.get("/", async (req: Request, res: Response) => {
  var sercurity: sercurity = req.cookies;
  await cthaveLsitFriend
    .GetHaveListFriendsByIdUser(sercurity.id)
    .catch((v) => {});
  res.json({
    listFirends: cthaveLsitFriend.HaveListFriends,
  });
});
routeFriends.post("/search", async (req: Request, res: Response) => {
  var nameUser = req.body.name;
  var s: sercurity = req.cookies;
  
  var listUser: User[] = [];
  var haveListFriends: HaveListFriends[] = [];

  await Promise.all([
    ctUser.SearchListUserByName(s.id, nameUser),
    cthaveLsitFriend.SearchFirendsByName(s.id, nameUser),
  ])
    .then((v) => {
      listUser = v[0];
      haveListFriends = v[1];
    })
    .catch((v) => {
      console.log(v);
    });
  res.json({
    err: false,
    listUser: listUser,
    listFriends: haveListFriends,
  });
});
routeFriends.post("/addFriends", async (req: Request, res: Response) => {
  var s: sercurity = req.cookies;
  var idFriend: string = req.body.idFriend;
  var check: boolean = false;
  await Promise.all([
    cthaveLsitFriend.InFriendInList(s.id, idFriend),
    ctAddFriendReques.InAddFriendRequest(s.id, idFriend),
  ]).then((v) => {
    if (v[0] || v[1]) {
      check = true;
    } else {
      check = false;
    }
  }).catch((v)=>{
    check=true
  })
  if (check) {
    res.end();
    return;
  }
  await ctAddFriendReques.InsertAddFriendRequest(s.id,idFriend)
  io.emit("ReqAddFriends","data")
  res.end()
});
routeFriends.post("/listAddFriendRequest",async(req:Request,res:Response)=>{
  var s: sercurity = req.cookies;
  var list = await ctAddFriendReques.ListAddFriendRequest(s.id);
  res.json({
    list:list
  })
})
export default routeFriends;
