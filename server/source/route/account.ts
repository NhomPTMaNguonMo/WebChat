import express, { Request, Response } from "express";
import __dirname from "../font/init.js";
import { hash, postRegister, sercurity, UnknownObject, validatedate, validateEmail } from "../confi.js";
import Account from "../source/model/Account.js";
import Validateuser from "../source/model/Validateuser.js";

import ControllerUser from "../source/controller/CtUsers.js";
import CTvalidateuser from "../source/controller/Ctvalidateuser.js";
import CTBox from "../source/controller/CTBox.js";
import CTAccout from "../source/controller/CtAccout.js";
import User from "../source/model/User.js";

var ctAccout = new CTAccout();
var ctUser = new ControllerUser();
var ctvalidateuser = new CTvalidateuser();
var ctBox = new CTBox();

const route: express.Router = express.Router();

route.use((req,res,next)=>{
  if (UnknownObject(req.body)) {
    res.json({ err: true, mess: "bạn điền chưa đủ" });
    return 
  }
  next()
})

route.get("/sign", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/sign.html");
});
route.post("/sign", async (req: Request, res: Response) => {
  var account = new Account();
  account["setAll"](req.body);
  var err: boolean = false;
  if (account.getAccount().length == 0) {
    res.json({ err: true, mess: "Chưa nhập tài khoản" });
    return;
  }

  if (account.getPassword().length == 0) {
    res.json({ err: true, mess: "Chưa nhập mật khẩu" });
    return;
  }
  await Promise.all([
    ctAccout.GetAccout(account),
    ctUser.GetUser(account.getAccount()),
  ]).catch((v) => {
    err = true;
  });
  if (err) {
    res.send("lỗi");
    return;
  }

  if (ctUser.user != undefined && ctAccout.account == undefined) {
    res.json({ err: true, mess: "Sai Mật Khẩu" });
    return;
  }
  if (ctUser.user == undefined) {
    res.json({ err: true, mess: "Sai Tài Khoản" });
    return;
  }
  var data = new Date();
  var validateuser = new Validateuser();
  validateuser.id = ctUser.user.id;
  validateuser.cookie = hash(
    ctUser.user.accout + validateuser.id + data.toUTCString()
  );

  await ctvalidateuser.InsertValidateuser(validateuser).catch((v) => {
    err = true;
  });
  if (err) {
    res.json("lỗi ");
    return;
  }
  await ctBox.getAllBoxByIdUser(validateuser.id);
  res.cookie("id", ctUser.user?.id);
  res.cookie("sercurity", validateuser.cookie,{maxAge:1000*60*60*24*356});
  res.json({
    err: false,
    user: {
      id: ctUser.user.id,
      avatar: ctUser.user.avatar,
      nameUser: ctUser.user.nameUser,
      birthday: ctUser.user.birthday,
      sex: ctUser.user.sex,
    },
    lsBox: ctBox.lsBox,
  });
});
route.get("/register", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/register.html");
});
route.post("/register", async (req: Request, res: Response) => {
  var body: postRegister = req.body;
  var err: boolean = false;
  if (!validatedate(body.day, body.month, body.year)) {
    res.json({ err: true, mess: "sai ngày tháng" });
    return ;
  }
  // if (!validateEmail(body.account)) {
  //   res.json({ err: true, mess: "sai email" });
  //   return;
  // }
  var user = await ctUser.GetUser(body.account).catch((v) => {
    err = true;
  });
  if (err) {
    res.end();
    return
  }
  if (user) {
    res.json({ err: true, mess: "Tài khoản đã tồn tại" });
    return
  }
  var account = new Account();
  account.setAll(body);
 
  await ctAccout.InsertAccount(account).catch((v) => {
    err = true;
  });
  
  if (err) {
    res.end();
    return
  }
  await ctUser.InsertNewUser(body).catch((v) => {
    err = true;
  });
  if (err) {
    res.end();
    return
  }
  res.sendFile(__dirname + "/register.html");
});
route.post("/createAccount", (req: Request, res: Response) => {});
route.get("/logOut",async (req:Request,res:Response)=>{
  var sercurity:sercurity=req.cookies;
  console.log(req.cookies);
  
  await ctvalidateuser.DeleteValidate(sercurity.id,sercurity.sercurity)
  .catch((v)=>{

  })
  res.clearCookie("id");
  res.clearCookie("sercurity")
  res.redirect("/account/sign");
})
route.get("/logOutAll",async (req:Request,res:Response)=>{
  var sercurity:sercurity=req.cookies;
  console.log(req.cookies);
  var validatedate:Validateuser|undefined = await ctvalidateuser.GetValidateUser(sercurity.id,sercurity.sercurity)
  if (!validatedate) {
    res.json("ok")
    return;
  }
  await ctvalidateuser.DeleteValidateAll(sercurity.id)
  .catch((v)=>{
    
  })
  res.clearCookie("id");
  res.clearCookie("sercurity")
  res.redirect("/account/sign");
})
export default route;
