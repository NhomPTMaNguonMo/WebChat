import mysql from "mysql";
import { confi } from "../../confi.js";
export function GetAdminByAccPassDB(account, password) {
    return new Promise((res, rej) => {
        let con = mysql.createConnection(confi);
        con.connect((err) => {
            if (err) {
                rej(err);
            }
            var sql = `SELECT * FROM admin WHERE accountAdmin = ? AND passwordAdmin = ?`;
            con.query(sql, [account, password], (err, rt, fiels) => {
                if (err) {
                    rej(err);
                }
                res(rt);
            });
        });
    });
}
//# sourceMappingURL=DBAdmin.js.map