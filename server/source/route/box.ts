import express, { Request, Response } from "express";
import { sercurity } from "../confi.js";

import CTBox from "../source/controller/CTBox.js";
import CTHavelistboxchat from "../source/controller/CTHavelistboxchat.js";
import CTMessage from "../source/controller/CTMessage.js";
import CTHaveListFriends from "../source/controller/CThaveLsitFriend.js";
import CtUer from "../source/controller/CtUsers.js"

import Box from "../source/model/Box.js";
import message from "../source/model/message.js";
import User from "../source/model/User.js";

var ctHaveListFriends=new CTHaveListFriends()
var ctBox = new CTBox();
var ctMessage=new CTMessage();
var ctHavelistboxchat = new CTHavelistboxchat();
var ctUer=new CtUer();
const routeBox = express.Router();

routeBox.post("/", async (req: Request, res: Response) => {
  var sercurity: sercurity = req.cookies;
  await ctBox.getAllBoxByIdUser(sercurity.id);
  res.json({
    listBoxchat: ctBox.lsBox,
  });
});
routeBox.post("/hiddenBoxChat", async (req: Request, res: Response) => {
  var s: sercurity = req.cookies;
  var idBox = req.body.idBox;
  var check = await ctHavelistboxchat.hiddenBoxChat(s.id, idBox);

  if (check) {
    res.status(200);
    res.json({ err: false, mess: "thành công ẩn hộp thoại" });
    return;
  }
  res.json({ err: true, mess: "có lỗi" });
});
routeBox.post("/chat", async (req: Request, res: Response) => {
  let s: sercurity = req.cookies;
  let idFriend = req.body.idFriend;
  if (s.id==idFriend) {
    res.json({err:true,mess:"bạn ko thể chat cho mình"})
    return
  }
  let user:User|undefined=await ctUer.GetUserById(idFriend)
  if (!user) {
    res.json({err:true,mess:"không có người này"})
    return
  }
  
  let box:Box
  var li:Box[]=await ctHavelistboxchat.GetIdBoxbyIdUserAndIdFriend(s.id,idFriend);
  if (li.length>0) {
    box=li[0]
    let listMess:message[]=await ctMessage.GetAllContentByidBox(box.idBox,s.id)
    console.log(box.json);
    
    res.json({
      box:box.json,
      listMess:listMess
    })
    return
  }
  
  


  await ctBox.insertNewBox()
  let isFriend:string=""
  await Promise.all([ctBox.GetEmptyBox(),ctHaveListFriends.IsFriendInList(s.id,idFriend)])
  .then((v)=>{
    li=v[0]
    isFriend=v[1]?ctBox.gettype().Friend:ctBox.gettype().noFriend
  })
  .catch((v)=>{
    li=[]
    console.log(v)
  })
 
  if (li.length<=0) {
    res.json({err:true,mess:"ko có box chat rỗng"})
    return
  }
  box=li[0]
  await Promise.all([
    ctHavelistboxchat.InsertIdToNewBox(s.id,box.idBox),
    ctBox.UpdateBoxType(box.idBox,isFriend),
    ctHavelistboxchat.InsertIdToNewBox(idFriend,box.idBox)])
    res.json({err:false,box:box.json()})
});

export default routeBox;
