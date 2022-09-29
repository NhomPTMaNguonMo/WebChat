import { result } from "../../confi.js";
import { GetAccoutDatabase,InsertAccountDB} from "../database/DBAccount.js"
import Account from "../model/Account.js";

export default class ctAccout{
    rt:result={
        err:false,
        result :[]
    }
    account:Account|undefined
    listAccount:Account[]
    constructor(){
        this.listAccount=[]
        this.account=undefined
    }
    async GetAccout(s:Account){
        this.Refesh();
        await GetAccoutDatabase(s)
        .then((v)=>{
          this.rt.result=v
        
        })
        .catch((v:result)=>{
            console.log(v.result);
            this.rt=v;
        })
       
        
        for (let i = 0; i < this.rt.result.length; i++) {
            const element = this.rt.result[i];
            this.account =new Account()
            this.account.setAll(element)
            break
        }
        return this.account
    }
    async InsertAccount(s:Account){
        await InsertAccountDB(s)
        .catch((v)=>{
            console.log(v);
            this.rt=v;
        })
        return this.rt
    }
    private Refesh(){
        this.listAccount=[]
        this.account=undefined
    }
    
}