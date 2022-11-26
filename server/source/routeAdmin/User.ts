import  express,{Request,Response,NextFunction,Router} from "express";
import { valiAdmin } from "../serverAdmin.js";
import CtUsers from "../source/controller/CtUsers.js"

var ctUsers=new CtUsers();
const user:Router=Router();

user.get("/getListUsers/:i",valiAdmin,async(req,res)=>{
    var index:number
    if (req.params.i==undefined) {
        index=0;
    }else{
        try {
            index=parseInt(req.params.i);
        } catch (error) {
            index=0
            console.log(error);
        }
    }
    var list=await ctUsers.GetUserLimit(index,50)
    res.json({err:false,list})
})

export default user