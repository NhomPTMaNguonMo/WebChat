import express, { Request, Response } from "express";
import { sercurity } from "../confi.js";

import CTMessage from "../source/controller/CTMessage.js";

var ctMessage = new CTMessage();
const routeMess = express.Router();

routeMess.post("/getAllContent", async (req: Request, res: Response) => {
  var s: sercurity = req.cookies;
  var idBox = req.body.idBox;
  let list = await ctMessage.GetAllContentByidBox(idBox, s.id);
  res.json({ err: true, list });
});


export default routeMess;
