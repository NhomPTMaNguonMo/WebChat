import {
  DeleteHiddenMessbyIdUserDB,
  GetHiddenMessByIdMessAndIdUserDB,
  InsertHiddenMessToBoxDB,
} from "../database/DBHiddenMessList.js";
import HiddenMess from "../model/hiddenMess.js";

export default class CTHiddenMessList {
  constructor() {}
  async InsertHiddenMessToBox(idUser: string, idMess: string) {
    await InsertHiddenMessToBoxDB(idUser, idMess).catch((v) => {
      console.log(v);
    });
    return true;
  }
  async DeleteHiddenMessbyIdUser(idUser: string, idMess: string) {
    await DeleteHiddenMessbyIdUserDB(idUser, idMess).catch((v) => {
      console.log(v);
    });
    return true;
  }
  async GetHiddenMessByIdMessAndIdUser(idUser: string, idMess: string) {
    var hiddenmess: HiddenMess | undefined = undefined;
    var s: undefined | HiddenMess[];
    await GetHiddenMessByIdMessAndIdUserDB(idUser, idMess)
      .then((v: any) => {
        s = v;
      })
      .catch((v) => {
        s = undefined;
      });
    if (s != undefined && s.length > 0) {
      hiddenmess = new HiddenMess();
      hiddenmess.setAll(s[0]);
    }
    return hiddenmess;
  }
}
