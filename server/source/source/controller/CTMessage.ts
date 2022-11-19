import {
  DeleteMessbyIdUserDB,
  GetAllContentByidBoxDB,
  InsertContentInDB,
  IsMessInBoxDB,
} from "../database/DBMessage.js";
import message from "../model/message.js";

export default class CTMessage {
  listMess: message[];
  constructor() {
    this.listMess = [];
  }
  async GetAllContentByidBox(idBox: string, idUser: string) {
    await GetAllContentByidBoxDB(idBox, idUser)
      .then((v: any) => {
        this.setlsMess(v);
      })
      .catch((v) => {
        console.log(v);
      });
    return this.listMess;
  }
  private Refesh() {
    this.listMess = [];
  }
  private setlsMess(any: []) {
    this.Refesh();
    let mess: message;
    for (let i = 0; i < any.length; i++) {
      const element = any[i];
      mess = new message();
      mess.setAll(element);
      this.listMess.push(mess.json());
    }
  }
  async InsertContentIn(idBox: string, idUser: string, mess: string) {
    await InsertContentInDB(idBox, idUser, mess)
      .then((v) => {
        
      })
      .catch((v) => {
        console.log(v);
      });
      return true;
  }
  async IsMessInBox(idBox:string,idMess:string){
    var check=false;
    await IsMessInBoxDB(idBox,idMess)
    .then((v : any)=>{
      if (v.length>0) {
        check=true
      }
    })
    .catch((v)=>{
      console.log(v);
    })
    return check
  }
  async DeleteMessbyIdUser(idUser:string,idMess:string){
    await DeleteMessbyIdUserDB(idUser,idMess)
    .catch((v)=>{
      console.log("CTMessage.ts");
      console.log(v);
    })
    return true
  }
}
