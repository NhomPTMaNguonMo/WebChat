import { InsertValidateuserBD, UpdateValidateuserBD } from "../database/DBvalidateuser.js";
import validateuser from "../model/Validateuser.js";

export default class CTvalidateuser{
    listValidateuser:validateuser[]
    constructor(){
        this.listValidateuser=[]
    }
   async InsertValidateuser(p:validateuser){
        var rt:boolean=true
        await InsertValidateuserBD(p)
        .catch((v)=>{
            console.log(v);
            rt=false
        })
        .then((v)=>{
            console.log(v);
            
        })
        return rt
    }
    async UpdateValidateuser(id:string,socket:string,status:number) {
        var rt:boolean=true
        await UpdateValidateuserBD(id,socket,status)
        .catch((v)=>{
            console.log(v)
            rt=false
        })
        return rt;
    } 
}