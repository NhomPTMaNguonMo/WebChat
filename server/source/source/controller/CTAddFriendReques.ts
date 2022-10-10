import {
  InAddFriendRequestDB,
  InsertAddFriendRequestDB,
  ListAddFriendRequestDB,
} from "../database/DBAddFriendReques.js";
import AddFriendRequest from "../model/AddFriendRequest.js";

export default class CTAddFriendReques {
  addFriendsList: AddFriendRequest[];
  constructor() {
    this.addFriendsList = [];
  }
  private refesh() {
    this.addFriendsList = [];
  }
  private setList(s: any) {
    console.log(s);
    this.refesh();
    let addFriendRequest: AddFriendRequest;
    for (let i = 0; i < s.length; i++) {
      const element = s[i];
      addFriendRequest = new AddFriendRequest();
      addFriendRequest.setAll(element);
      this.addFriendsList.push(addFriendRequest);
    }
  }
  async InAddFriendRequest(idUser: string, idAddFriends: string) {
    let check: boolean = false;
    await InAddFriendRequestDB(idUser, idAddFriends)
      .then((v) => {
        let s: any = v;
        if (s.length > 0) {
          check = true;
        } else {
          check = false;
        }
      })
      .catch((v) => {
        console.log(v);
        check = true;
      });
    return check;
  }
  async InsertAddFriendRequest(idUser: string, idAddFriends: string) {
    var check: boolean = false;
    await InsertAddFriendRequestDB(idUser, idAddFriends)
      .then((v) => {
        check = true;
      })
      .catch((v) => {
        check = false;
      });
    return check;
  }
  async ListAddFriendRequest(idUser: string) {
    var s: any;
    s = await ListAddFriendRequestDB(idUser);
    this.setList(s);
    return this.addFriendsList;
  }
}
