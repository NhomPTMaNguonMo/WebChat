export default class Account{
   private account:string
   private password:string
    constructor(){
        this.account="",
        this.password=""
    }
    public setAll(d:any){
        this.account=d.account?d.account:""
        this.password=d.password?d.password:""
        return this
    }
    public getAccount() : string {
        return this.account;
    }
    public getPassword() : string {
        return this.password;
    }
    
    public setAccount(v : string) {
        this.account = v;
    }
    public setPassord(v : string) {
        this.password = v;
    }
}