import { confi } from "../../confi.js";
import mysql from "mysql";
export function GetAllContentByidBoxDB(idBox, idUser) {
    return new Promise((res, error) => {
        let con = mysql.createConnection(confi);
        con.connect((err) => {
            if (err) {
                error(err);
            }
            let query = `
            SELECT * 
            FROM messenge m
            WHERE m.idBox LIKE ? AND m.ngay > (SELECT h.ngay FROM havelistboxchat h WHERE h.idBox = ? AND h.idUser = ? )
            AND m.idMess NOT IN (SELECT hdm.idMess FROM hiddenmesslist hdm WHERE hdm.idUser LIKE ? )
            ORDER BY ngay DESC`;
            con.query(query, [idBox, idBox, idUser, idUser], (err, rt, fiels) => {
                if (err) {
                    error(err);
                }
                res(rt);
            });
        });
    });
}
export function InsertContentInDB(idBox, idUser, mess) {
    return new Promise((res, rej) => {
        var con = mysql.createConnection(confi);
        con.connect((err) => {
            if (err) {
                rej(err);
            }
            var sql = "INSERT INTO messenge ( idBox, content, type,idUser) VALUES (?,?,0,?)";
            con.query(sql, [idBox, mess, idUser], (err, rs, fiels) => {
                if (err) {
                    rej(err);
                }
                res(rs);
            });
        });
    });
}
export function IsExistMessDB(idMess) {
    return new Promise((res, rej) => {
        var con = mysql.createConnection(confi);
        con.connect((err) => {
            if (err) {
                rej(err);
            }
            var sql = "SELECT * FROM messenge WHERE idMess LIKE ?";
            con.query(sql, [idMess], (err, rs, fiels) => {
                if (err) {
                    rej(err);
                }
                res(rs);
            });
        });
    });
}
export function DeleteMessbyIdUserDB(idUser, idMess) {
    return new Promise((res, rej) => {
        var con = mysql.createConnection(confi);
        con.connect((err) => {
            if (err) {
                rej(err);
            }
            var sql = `DELETE FROM messenge WHERE idUser LIKE  AND idMess LIKE `;
            con.query(sql, [idUser, idMess], (err, rs, fiels) => {
                if (err) {
                    rej(err);
                }
                res(rs);
            });
        });
    });
}
//# sourceMappingURL=DBMessage.js.map