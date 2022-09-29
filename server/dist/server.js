import express from "express";
import http from "http";
import cookieParser from "cookie-parser";
import route from "./source/route/account.js";
var port = 666;
const app = express();
const server = http.createServer(app);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader("access-control-allow-origin", "*");
    next();
});
app.get("/", (req, res) => {
    res.redirect("/acount/register");
});
app.use("/acount", route);
app.get("/f", (req, res) => {
    res.json({ h: "ok" });
});
server.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
