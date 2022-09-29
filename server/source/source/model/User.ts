enum sex{
    nu=0,
    nam
}
export default class User{
    id:string
    accout:string
    nameUser :string
    status :number
    avatar:string
    sex:string
    birthday:string
    constructor(){
        this.id=""
        this.accout=""
        this.nameUser=""
        this.status=0
        this.avatar="anh"
        this.birthday=""
        this.sex=""
    }
    setAll(d:any){
        this.id=d.id
        this.accout=d.account
        this.nameUser=d.nameUser
        this.status=d.status
        this.avatar=d.avatar?d.avatar:"anh"
        this.birthday=d.birthday
        this.sex=d.sex
    }
}