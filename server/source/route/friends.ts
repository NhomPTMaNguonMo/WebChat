import express, { Request, Response } from "express";
import __dirname from "../confi.js";
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
import CTHavelistboxchat from "../source/controller/CTHavelistboxchat.js";
import CTBox from "../source/controller/CTBox.js";
import User from "../source/model/User.js";
import io from "../server.js";

var cthaveLsitFriend = new CTHaveListFriends();
var ctAddFriendReques = new CTAddFriendReques();
var ctHavelistboxchat=new CTHavelistboxchat();
var ctUser = new CTUsers();
var ctBox = new CTBox();
const routeFriends: express.Router = express.Router();

routeFriends.post("/", async (req: Request, res: Response) => {
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
  
  
  if (nameUser.length <= 0) {
    res.json({mess:"chưa nhập"})
    return;
  }
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
routeFriends.post("/addFriendsRequset", async (req: Request, res: Response) => {
  var s: sercurity = req.cookies;
  var idFriend: string = req.body.idFriend;
  if (s.id === idFriend) {
    res.json({ err: true, mess: "bạn không thể kết bạn với mình" });
    return;
  }
  var check: boolean = false;
  await Promise.all([
    cthaveLsitFriend.IsFriendInList(s.id, idFriend),
    ctAddFriendReques.InAddFriendRequest(s.id, idFriend),
    ctAddFriendReques.InAddFriendRequest(idFriend, s.id),
  ])
    .then((v) => {
      if (v[0] || v[1] || v[2]) {
        check = true;
      } else {
        check = false;
      }
    })
    .catch((v) => {
      check = true;
    });
  if (check) {
    res.json({ err: true, mess: "là bạn bè rui hoặc có gửi lời kết bạn" });
    return;
  }
  var check = await ctAddFriendReques.InsertAddFriendRequest(s.id, idFriend);
  if (check) {
    io.to(idFriend).emit("ReqAddFriends", "yêu cầu kết bạn");
  }
  res.json({err:true,mess:"bạn đã giử thành công"})
});
routeFriends.post("/listAddFriendRequest",async (req: Request, res: Response) => {
    var s: sercurity = req.cookies;
    var list = await ctAddFriendReques.ListAddFriendRequest(s.id);
    res.json({
      list: list,
    });
  }
);
routeFriends.post("/cacelAddFriendRequest",async (req: Request, res: Response) => {
    let s = req.body.idFriend;
    let sercurity: sercurity = req.cookies;
    var status = await ctAddFriendReques.CancelingFriendRequest(
      s,
      sercurity.id
    );
    res.json({ err: status });
  }
);
routeFriends.post("/acceptAddFriendRequest",async (req: Request, res: Response) => {
    var idFriend = req.body.idFriend;
    var s: sercurity = req.cookies;
    var check = await ctAddFriendReques.InAddFriendRequest(idFriend, s.id);
    if (!check) {
      res.json({ err: true, mess: "bạn đó chưa giử lời kết bạn" });
      return;
    }
    await Promise.all([
      ctAddFriendReques.CancelingFriendRequest(idFriend, s.id),
      cthaveLsitFriend.insertListFriends(s.id, idFriend),
      cthaveLsitFriend.insertListFriends(idFriend, s.id),
    ])
      .catch((v) => {
        check = false;
      })
      .then((v) => {
        check = true;
      });
    res.json({ err: false, mess: "thêm bạn thành công" });
  }
);
routeFriends.post("/cancelFriends", async (req: Request, res: Response) => {
  var s: sercurity = req.cookies;
  var idFriend = req.body.idFriend;
  var idBox: any = await ctHavelistboxchat.GetIdBoxbyIdUserAndIdFriend(s.id, idFriend);
  await Promise.all([
    cthaveLsitFriend.CancelFriends(s.id, idFriend),
    cthaveLsitFriend.CancelFriends(idFriend, s.id),
  ]);
  if (idBox.length > 0) {
    await ctBox.UpdateBoxType(idBox[0].idBox, ctBox.gettype().noFriend);
  }
  res.json({ err: false });
});
routeFriends.post("/sentFriendRequest",async (req: Request, res: Response)=>{
  var s:sercurity=req.cookies
  let listAddFriendRequest=await ctAddFriendReques.ListSentFriendRequest(s.id)
  res.json({err:false,list:listAddFriendRequest})
})
export default routeFriends;
