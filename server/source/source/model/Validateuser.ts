enum status{
    offline=0,
    online=1
}
export default class Validateuser{
    id:string
    cookie:string
    socket:string
    status:status
    constructor(){
        this.id=""
        this.cookie=""
        this.socket=""
        this.status=1
    }
    public setAll(p:any){
        this.cookie=p.cookie?p.cookie:""
        this.id=p.id?p.id:""
        this.socket=p.socket?p.socket:""
        this.status=p.status?p.status:""
    }
    public Json(){
        return {
            id:this.id,
            cookie:this.cookie,
            socket:this.socket,
            status:this.status
        }
    }
}