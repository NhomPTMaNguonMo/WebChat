import { postRegister, result } from "../../confi.js";
import {
  GetkUserDatabase,
  GetUserByIdDB,
  GetUserLimitDB,
  InsertNewUserDB,
  ListUserByNameDB,
} from "../database/DBUser.js";
import User from "../model/User.js";
import CT from "./CT.js";

export default class ControllerUser implements CT {
  rt: result = {
    err: false,
    result: [],
  };
  user: User | undefined;
  listUser: User[];
  constructor() {
    this.listUser = [];
    this.user = undefined;
  }
  async GetUser(account: string): Promise<User | undefined> {
    this.reFresh();
    await GetkUserDatabase(account)
      .then((v) => {
        this.rt.result = v;
        console.log(v);
      })
      .catch((v) => {
        console.log(v.result);
        this.rt = v;
      });

    for (let i = 0; i < this.rt.result.length; i++) {
      const element = this.rt.result[i];
      this.user = new User();
      this.user.setAll(element);
      break;
    }
    return this.user;
  }
  async InsertNewUser(p: User) {
    var err = false;
    await InsertNewUserDB(p).catch((v) => {
      err = true;
      console.log(v);
    });
    return err;
  }
  private reFresh() {
    this.rt.err = false;
    this.rt.result = [];
    this.listUser = [];
    this.user = undefined;
  }
  private SetlistUser(rt: any) {
    this.reFresh();
    for (let i = 0; i < rt.length; i++) {
      const element = rt[i];
      this.user = new User();
      this.user.setAll(element);
      this.listUser.push(this.user.json());
    }
  }
  async SearchListUserByName(idUser: string, name: string): Promise<User[]> {
    await ListUserByNameDB(idUser, name)
      .catch((v) => {
        this.reFresh();
        console.log(v);
      })
      .then((v) => {
        this.SetlistUser(v);
      });
    return this.listUser;
  }
  async GetUserById(idUser: string): Promise<User | undefined> {
    this.reFresh();
    await GetUserByIdDB(idUser)
      .then((v: any) => {
        let s: any[] = v;
        if (s.length > 0) {
          this.user = new User();
          this.user.setAll(s[0]);
        }
      })
      .catch((v) => {
        console.log(v);
      });
    return this.user;
  }
  async GetUserLimit(index: number, limit: number):Promise<User[] | undefined> {
    var s:any = await GetUserLimitDB(index, limit);
    if (s!==undefined && s.length>0) {
        this.setList(s)
        return this.listUser;
    }
    else{
        return undefined
    }
  }
  refesh(): void {
    this.listUser = [];
  }
  setList(p: []): void {
    this.reFresh();
    var u: User;
    for (let i = 0; i < p.length; i++) {
      const element = p[i];
      u = new User();
      u.setAll(element);
      this.listUser.push(u);
    }
  }
}
