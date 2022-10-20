import { formatDate } from "../../confi.js";

enum sex {
  nu = 0,
  nam,
}
export default class User {
  id: string;
  accout: string;
  nameUser: string;
  status: number;
  avatar: string;
  sex: string;
  birthday: string | undefined;
  constructor() {
    this.id = "";
    this.accout = "";
    this.nameUser = "";
    this.status = 0;
    this.avatar = "anh";
    this.birthday = "";
    this.sex = "";
  }
  setAll(d: any) {
    for (const key in this) {
      this[key] = d[key];
    }
  }
  json() {
    var s: any = {};
    for (const key in this) {
      const element = this[key];
      if (element) {
        s[key] = element;
      }
    }
    if (s["birthday"]) {
      s["birthday"]=formatDate(s["birthday"])
    }
    return s;
  }
}
