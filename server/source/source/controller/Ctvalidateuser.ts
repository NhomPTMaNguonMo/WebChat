import { DeleteValidateAllDB, DeleteValidateDB, GetValidateUserBD, InsertValidateuserBD, UpdateValidateuserBD } from "../database/DBvalidateuser.js";

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
    async DeleteValidate (id:string,sercurity:string) {
        var rt:boolean=true
        await DeleteValidateDB(id,sercurity)
        .catch((v)=>{
            console.log(v)
            rt=false
        })
        return rt;
    }
    async DeleteValidateAll (id:string) {
        var rt:boolean=true
        
        await DeleteValidateAllDB(id)
        .catch((v)=>{
            console.log(v)
            rt=false
        })
        return rt;
    }
    async GetValidateUser (id:string,cookie:string) {
        var rt:any=[]
        var validatedate:validateuser|undefined =undefined;
        await GetValidateUserBD(id,cookie)
        .then((v)=>{
            rt=v;
        })
        .catch((v)=>{
            validatedate=undefined;
        })
        for (let i = 0; i < rt.length; i++) {
            const element = rt[i];
            validatedate=new validateuser()
            validatedate.setAll(element);
        }
        return validatedate;
    }
}