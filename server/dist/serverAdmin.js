import express from "express";
import http from "http";
import __dirname, { clearCookie, hash, IP } from "./confi.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import account from "./routeAdmin/account.js";
var port = 667;
const app = express();
export function valiAdmin(req, res, next) {
    var cookie = req.cookies;
    var date = new Date();
    if (date.getTime() - cookie.time > (1000 * 60 * 60 * 5)) {
        clearCookie(res);
        res.json({ mess: "hết quyền admin", err: "true" });
        return;
    }
    var b = hash(cookie.a, 10);
    if (b != cookie.b) {
        clearCookie(res);
        res.json({ mess: "hết quyền admin", err: "true" });
        return;
    }
    next();
}
const server = http.createServer(app);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/fontAdmin/signinAdmin.html");
});
app.get("/admin", valiAdmin, (req, res) => {
    res.sendFile(__dirname + "/fontAdmin/admin.html");
});
app.use("/admin", account);
server.listen(port, () => {
    IP(port);
});
//# sourceMappingURL=serverAdmin.js.map