import { confi } from "../../confi.js";
import mysql from "mysql";
export function InsertHiddenMessToBoxDB(idUser, idMess) {
    return new Promise((res, rej) => {
        var con = mysql.createConnection(confi);
        con.connect((err) => {
            if (err) {
                rej(err);
            }
            var sql = "INSERT INTO hiddenmesslist(idUser, idMess) VALUES (?,?)";
            con.query(sql, [idUser, idMess], (err, rs, fiels) => {
                if (err) {
                    rej(err);
                }
                res(rs);
            });
        });
    });
}
export function DeleteHiddenMessbyIdUserDB(idUser, idMess) {
    return new Promise((res, rej) => {
        var con = mysql.createConnection(confi);
        con.connect((err) => {
            if (err) {
                rej(err);
            }
            var sql = `DELETE FROM hiddenmesslist WHERE idUser LIKE ? AND idMess LIKE ?`;
            con.query(sql, [idUser, idMess], (err, rs, fiels) => {
                if (err) {
                    rej(err);
                }
                res(rs);
            });
        });
    });
}
export function GetHiddenMessByIdMessAndIdUserDB(idUser, idMess) {
    return new Promise((res, rej) => {
        var con = mysql.createConnection(confi);
        con.connect((err) => {
            if (err) {
                if (err) {
                    rej(err);
                }
            }
            var sql = `SELECT * FROM hiddenmesslist WHERE idUser LIKE ? AND idMess LIKE ? `;
            con.query(sql, [idUser, idMess], (err, rs, fiels) => {
                if (err) {
                    rej(err);
                }
                res(rs);
            });
        });
    });
}
//# sourceMappingURL=DBHiddenMessList.js.map