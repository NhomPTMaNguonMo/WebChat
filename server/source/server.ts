import express ,{ Request, Response, NextFunction } from "express";
import http from "http";
import cookieParser from "cookie-parser";


import route from "./route/account.js";
import routeFriends from "./route/friends.js";
import Ctvalidateuser from "./source/controller/Ctvalidateuser.js";
import __dirname from "./font/init.js"
import { Server, ServerOptions } from "socket.io";
var ctvalidateuser = new Ctvalidateuser();

var port = 666;
const app: express.Express = express();
const server = http.createServer(app);
const io=new Server(server,{});

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("access-control-allow-origin", "*");
  next();
});
async function Vali(req: Request, res: Response, next: NextFunction) {
  var s =await ctvalidateuser.GetValidateUser(req.cookies.id, req.cookies.sercurity);
  if (!s) {
    res.redirect("/acount/sign");
    return;
  }
  next();
}
app.get("/",async (req, res) => {
  var s =await ctvalidateuser.GetValidateUser(req.cookies.id, req.cookies.sercurity);
  if (!s) {
    res.sendFile(__dirname+"/sign.html")
    return;
  }
  res.sendFile(__dirname+"/client.html");
});
app.use("/account", route);
app.use("/friends", Vali, routeFriends);
server.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
io.on("connection", (socket) => {
  
  
});

