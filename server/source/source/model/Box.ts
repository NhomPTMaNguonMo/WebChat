import { UpdateBoxTypeDB } from "../database/DBBox.js"

export default class Box{
    idBox:string
    idUser:string
    nameUser:string
    avatar:string
    status:string
    constructor(){
        this.idBox=""
        this.idUser=""
        this.nameUser=""
        this.avatar=""
        this.status=""
    }
    
    setAll(p:any){
        for (const key in this) {
            this[key] =p[key]
        }
    }
    json():any{
        var s:any={}
        for (const key in this) {
            const element=this[key]
            if (element) {
                s[key]=element
            }
        }
        return s
    }
    
}