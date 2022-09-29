import { postRegister, result } from "../../confi.js";
import { GetkUserDatabase, InsertNewUserDB } from "../database/DBUser.js";
import User from "../model/User.js";

export default class ControllerUser{

    rt:result={
        err:false,
        result:[]
    }
    user:User|undefined
    listUser:User[]
    constructor(){
        this.listUser=[]
        this.user=undefined
    }
   async GetUser(account:string){
    this.reFresh()
       await GetkUserDatabase(account)
        .then((v)=>{
            this.rt.result=v
        })
        .catch((v)=>{
            console.log(v.result);
            this.rt=v;
        })
       
        for (let i = 0; i < this.rt.result.length; i++) {
            const element = this.rt.result[i];
            this.user =new User()
            this.user.setAll(element)
           break
        }
        return this.user
    }
    async InsertNewUser(p:postRegister){
        let user=new User();
        var err=false
        user.setAll(p)
        user.birthday=`${p.year}-${p.month}-${p.day}`
        await InsertNewUserDB(user)
        .catch((v)=>{
            err=true
            console.log(v)
        })
        return err
    }
    private reFresh(){
        this.rt.err=false
        this.rt.result=[]
        this.listUser=[]
        this.user=undefined
    }
}