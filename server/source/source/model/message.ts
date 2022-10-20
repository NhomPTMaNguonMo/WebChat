import { formatDate } from "../../confi.js";
export enum typeMess{
    content="0",
    image="1"
}
export default class message {
  
  idBox: string;
  idUser: string;
  content: string;
  type: typeMess;
  idMess: string;
  ngay: string;
  constructor() {
    this.idBox=""
    this.idUser=""
    this.content=""
    this.type=typeMess.content
    this.idMess=""
    this.ngay=""
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
    if (s["ngay"]) {
      s["ngay"]=formatDate(s["ngay"])
    }
    return s;
  }
}
