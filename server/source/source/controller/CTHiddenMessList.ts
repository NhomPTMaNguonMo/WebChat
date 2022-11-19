import {
  DeleteHiddenMessbyIdUserDB,
  InsertHiddenMessToBoxDB,
} from "../database/DBHiddenMessList.js";

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
}
