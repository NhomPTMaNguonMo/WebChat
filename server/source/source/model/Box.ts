export default class Box{
    idBox:string
    idUser:string
    nameUser:string
    avatar:string
    constructor(){
        this.idBox=""
        this.idUser=""
        this.nameUser=""
        this.avatar=""
    }
    setAll(p:any){
        this.idBox=p.idBox
        this.idUser=p.idUser
        this.nameUser=p.nameUser
        this.avatar=p.avatar
    }
}