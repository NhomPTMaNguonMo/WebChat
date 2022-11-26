import CT from "./CT.js";
import { GetAdminByAccPassDB } from "../database/DBAdmin.js";
import Admin from "../model/admin.js";

export default class CTAdmin implements CT {
  refesh(): void {}
  setList(p: []): void {
    this.refesh();
  }
  async GetAdminByAccPass(account: string, password: string) {
    var admin: Admin | undefined = undefined;
    await GetAdminByAccPassDB(account, password)
      .then((v: any) => {
        if (v.length != undefined && v.length > 0) {
          admin = new Admin();
          admin.setAll(v[0]);
        }
      })
      .catch((v) => {
        console.log(v);
      });
    return admin;
  }
}
