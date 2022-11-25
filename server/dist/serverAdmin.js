import express from "express";
import http from "http";
import { IP } from "./confi.js";
var port = 667;
const app = express();
const server = http.createServer(app);
server.listen(port, () => {
    IP(port);
});
//# sourceMappingURL=serverAdmin.js.map