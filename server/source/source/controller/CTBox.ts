import { getAllBoxByIdInBD } from "../database/DBBox.js";
import Box from "../model/Box.js";

export default class DBBox{
    lsBox:Box[]
    
    constructor(){
        this.lsBox=[]
    }
    private Refesh(){
        this.lsBox=[]
    }
   async getAllBoxByIdUser(idUser:string){
    this.Refesh()
       await getAllBoxByIdInBD(idUser)
       .catch((v)=>{
            console.log(v);
       })
       .then((v)=>{
        console.log(v);
        
        this.setlsBox(v as []);
       })
       return true
    }
    private setlsBox(any:[]){
        this.lsBox=[]
        let box:Box
        for (let i = 0; i < any.length; i++) {
            const element = any[i];
            box=new Box()
            box.setAll(element)
            this.lsBox.push(box);
        }
    }
}