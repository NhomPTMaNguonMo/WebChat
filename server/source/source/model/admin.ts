import entity from "./interface/entity.js";

export default class Admin extends entity{
    account:string
    password:string
    constructor(){
        super()
        this.account="",
        this.password=""
    }
    json() {
        return super.json()
    }
    setAll(p: any): void {
        super.setAll(p)
    }
}