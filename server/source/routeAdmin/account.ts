import express from "express";
import CTAdmin from "../source/controller/CTAdmin.js";
import Admin from "../source/model/admin.js";
import CTUer from "../source/controller/CtUsers.js"
import { clearCookie, hash } from "../confi.js";

var ctUsers=new CTUer();
var ctAdmin=new CTAdmin();
const account:express.Router=express.Router();

account.post("/signin",async(req,res)=>{
    clearCookie(res)
    var account=req.body.account;
    var password=req.body.password;
    var admin: Admin | undefined=await ctAdmin.GetAdminByAccPass(account,password);
    if (admin==undefined) {
        res.json({err:true,mess:"không thể đăng nhập"})
        return
    }
    var list=await ctUsers.GetUserLimit(0,100)
    var date=new Date();

    var a=hash((""+date.getTime()+admin),10);
    var b=hash(a,10);

    var optin={httpOnly:true,maxAge:1000*60*60*5}

    res.cookie("time",date.getTime(),optin)
    res.cookie("a",a,optin)
    res.cookie("b",b,optin)
    res.send({err:false,list})
})


export default account