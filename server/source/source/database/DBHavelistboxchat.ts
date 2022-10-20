import mysql from "mysql";
import { confi } from "../../confi.js";
import { statusBox } from "../controller/CTHavelistboxchat.js";

export function UpdateStatusBox(idUser: string, idBox: string, status: string) {
  return new Promise((res, rel) => {
    let con = mysql.createConnection(confi);
    con.connect((err) => {
      if (err) {
        rel(err);
      }
      let sql = "";
      if (status == statusBox.hidden) {
        sql = `UPDATE havelistboxchat 
                SET status= ? , ngay=CURRENT_TIMESTAMP
                WHERE idUser = ? AND idBox = ?`;
      } else {
        sql = `UPDATE havelistboxchat 
                SET status= ?
                WHERE idUser = ? AND idBox = ?`;
      }
      con.query(sql, [status, idUser, idBox], (err, rt, fiels) => {
        if (err) {
          rel(err);
        }
        res(rt);
      });
    });
  });
}
export function GetIdBoxbyIdUserAndIdFriendDB(
  idUser: string,
  idFriend: string
) {
  return new Promise((res, err) => {
    var con = mysql.createConnection(confi);
    con.connect((e) => {
      if (e) {
        err(e.message);
      }
      var sql =
        "SELECT h1.idBox FROM havelistboxchat h1, havelistboxchat h2 WHERE h1.idUser=? AND h2.idUser=? AND h1.idBox=h2.idBox";
      con.query(sql, [idUser, idFriend], (e, rt, fiels) => {
        if (e) {
          err(e.message);
        }
        res(rt);
      });
    });
  });
}
export function InsertIdToNewBoxDB(idUser: string, idBox: string) {
  return new Promise((res, err) => {
    var con = mysql.createConnection(confi);
    con.connect((e) => {
      if (e) {
        err(e.message);
      }
      var sql = `INSERT INTO havelistboxchat
        (idBox, idUser, status) 
        VALUES (?,?,'0')`;
      con.query(sql, [idBox, idUser], (e, rt, fiels) => {
        if (e) {
          err(e.message);
        }
        res(rt);
      });
    });
  });
}
export function GetIdUserOnlineInBoxDB(idBox: string, idUser: string) {
  return new Promise((res, err) => {
    var con = mysql.createConnection(confi);
    con.connect((e) => {
      if (e) {
        err(e.message);
      }
      var sql = `SELECT * 
      FROM havelistboxchat h, validateuser v
      WHERE h.idUser NOT LIKE ? AND h.idBox LIKE ? AND h.idUser=v.id AND v.status >= 1`;
      con.query(sql, [idUser, idBox], (e, rt, fiels) => {
        if (e) {
          err(e.message);
        }
        res(rt);
      });
    });
  });
}

export function IsIdUserInBoxDB(idUser: string, idBox: string) {
  return new Promise((res, err) => {
    var con = mysql.createConnection(confi);
    con.connect((e) => {
      if (e) {
        err(e.message);
      }
      var sql = `SELECT idUser 
      FROM havelistboxchat 
      WHERE idUser LIKE ? AND idBox LIKE ?`;
      con.query(sql, [idUser, idBox], (e, rt, fiels) => {
        if (e) {
          err(e.message);
        }
        res(rt);
      });
    });
  });
}

export function SetNotSeenInBoxDB(idUser: string, idBox: string) {
  return new Promise((res, err) => {
    var con = mysql.createConnection(confi);
    con.connect((e) => {
      if (e) {
        err(e.message);
      }
      var sql = `
      UPDATE havelistboxchat 
      SET status=3
      WHERE idUser NOT LIKE ? AND idBox LIKE ?`;
      con.query(sql, [idUser, idBox], (e, rt, fiels) => {
        if (e) {
          err(e.message);
        }
        res(rt);
      });
    });
  });
}

