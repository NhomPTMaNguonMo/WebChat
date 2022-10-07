import { InAddFriendRequestDB } from "../database/DBAddFriendReques.js";
import AddFriendReques from "../model/AddFriendReques";

export default class CTAddFriendReques{
    addFriendsList:AddFriendReques[];
    constructor(){
        this.addFriendsList=[]
    }
    async InAddFriendRequest(idUser: string, idAddFriends: string){
        let check:boolean=false;
        await InAddFriendRequestDB(idUser,idAddFriends)
        .then((v)=>{
            let s:any=v
            if (s.length > 0) {
                check = true;
              } else {
                check = false;
              }
        })
        .catch((v)=>{
            console.log(v)
            check=true;
        })
        return check
    }
    async InsertAddFriendRequest(idUser: string, idAddFriends: string){
        var check:boolean=false
        await InAddFriendRequestDB(idUser,idAddFriends)
        .then((v)=>{
            check=true
        })
        .catch((v)=>{
            check=false
        })
        return check
    }
}