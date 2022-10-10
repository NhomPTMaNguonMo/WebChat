import mysql from "mysql";
import { confi } from "../../confi.js";


export function InsertAddFriendRequestDB(idUser: string, idAddFriends: string) {
  return new Promise((res, error) => {
    var con = mysql.createConnection(confi);
    con.connect((err) => {
      if (err) {
        error(err);
      }
      var sql =
        "INSERT INTO `listaddfriends`(`idUser`, `idAddFriends`) VALUES (?,?)";
      con.query(sql, [idUser, idAddFriends], (e, ru, field) => {
        if (e) {
          error(e);
        }
        res(ru);
      });
    });
  });
}
export function InAddFriendRequestDB(idUser: string, idAddFriends: string){
  return new Promise((res, error) => {
    var con = mysql.createConnection(confi);
    con.connect((err) => {
      if (err) {
        error(err);
      }
      var sql ="SELECT * FROM listaddfriends WHERE idUser=? AND idAddFriends=? ";
      con.query(sql, [idUser, idAddFriends], (e, ru, field) => {
        if (e) {
          error(e);
        }
        res(ru);
      });
    });
  });
}

export async function ListAddFriendRequestDB(idUser:string) {
  return new Promise((res, error) => {
    var con = mysql.createConnection(confi);
    con.connect((err) => {
      if (err) {
        error(err);
      }
      var sql ="SELECT user.id,user.nameUser,user.avatar,user.birthday,user.sex FROM listaddfriends, user WHERE listaddfriends.idAddFriends=? AND listaddfriends.idUser=user.id";
      con.query(sql,idUser, (e, ru, field) => {
        if (e) {
          error(e);
        }
        res(ru);
      });
    });
  });
}
