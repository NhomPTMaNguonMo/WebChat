import mysql from "mysql";
import { confi } from "../../confi.js";
export function GetkUserDatabase(account) {
    return new Promise((res, err) => {
        var con = mysql.createConnection(confi);
        con.connect((e) => {
            if (e) {
                err(e);
            }
            var sql = "SELECT * FROM `user` WHERE user.account=?";
            con.query(sql, account, (e, rt, fiels) => {
                if (e) {
                    err(e);
                }
                res(rt);
            });
        });
    });
}
export function InsertNewUserDB(p) {
    return new Promise((res, rej) => {
        var con = mysql.createConnection(confi);
        con.connect((e) => {
            if (e) {
                rej(e);
            }
            var sql = " INSERT INTO `user`( `account`, `nameUser`, `birthday`, `sex`,`avatar`) VALUES (?,?,?,?,?)";
            con.query(sql, [p.account, p.nameUser, p.birthday, p.sex, p.avatar], (e, rt, fi) => {
                if (e) {
                    rej(e);
                }
                res(true);
            });
        });
    });
}
export function ListUserByNameDB(idUser, name) {
    return new Promise((res, rej) => {
        var con = mysql.createConnection(confi);
        con.connect((e) => {
            if (e) {
                rej(e);
            }
            var sql = "SELECT u.id,u.nameUser,u.avatar,u.birthday,u.sex FROM user u WHERE u.nameUser LIKE ? and u.id NOT IN (SELECT h.idFriends FROM havelistfriends h WHERE h.idUser = ?) AND u.id <> ?";
            con.query(sql, [`%${name}%`, idUser, idUser], (e, rt, fi) => {
                if (e) {
                    rej(e);
                }
                res(rt);
            });
        });
    });
}
export function GetUserByIdDB(idUser) {
    return new Promise((res, rej) => {
        var con = mysql.createConnection(confi);
        con.connect((e) => {
            if (e) {
                rej(e);
            }
            var sql = "SELECT id,nameUser,avatar,birthday,sex FROM user WHERE id= ?";
            con.query(sql, idUser, (e, rt, fi) => {
                if (e) {
                    rej(e);
                }
                res(rt);
            });
        });
    });
}
export function GetUserLimitDB(index, limit) {
    return new Promise((res, rej) => {
        var con = mysql.createConnection(confi);
        con.connect((err) => {
            if (err) {
                rej(err);
            }
            var sql = `select * from user u, account a where u.account=a.account  limit ?,?`;
            con.query(sql, [index, limit], (err, result, fiels) => {
                if (err) {
                    rej(err);
                }
                res(result);
            });
        });
    });
}
export function SumUserDB() {
    return new Promise((res, rej) => {
        var con = mysql.createConnection(confi);
        con.connect((err) => {
            if (err) {
                rej(err);
            }
            var sql = `SELECT COUNT(*) FROM account;`;
            con.query(sql, (err, result, fiels) => {
                if (err) {
                    rej(err);
                }
                res(result);
            });
        });
    });
}
//# sourceMappingURL=DBUser.js.map