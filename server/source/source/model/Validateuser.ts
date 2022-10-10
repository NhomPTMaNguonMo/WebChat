enum status {
  offline = 0,
  online = 1,
}
export default class Validateuser {
   id: string;
   cookie: string;
   socket: string;
   status: status;
  constructor() {
    this.id = "";
    this.cookie = "";
    this.socket = "";
    this.status = 1;
  }
  public setAll(p: any) {
    for (const key in this) {
      this[key] = p[key];
    }
  }
  public Json() {
    var s: any = {};
    for (const key in this) {
      const element = this[key];
      if (element) {
        s[key] = element;
      }
    }
    return s;
  }
}
