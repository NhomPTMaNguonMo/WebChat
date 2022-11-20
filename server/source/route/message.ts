import express, { Request, Response } from "express";
import { sercurity } from "../confi.js";

import CTMessage from "../source/controller/CTMessage.js";
import CTHavelistboxchat from "../source/controller/CTHavelistboxchat.js";
import CTHiddenMessList from "../source/controller/CTHiddenMessList.js";

var ctHiddenMessList=new CTHiddenMessList();
var ctHavelistboxchat=new CTHavelistboxchat();
var ctMessage = new CTMessage();
const routeMess = express.Router();

// chưa test
routeMess.post("/getAllContent", async (req: Request, res: Response) => {
  var s: sercurity = req.cookies;
  var idBox = req.body.idBox;
  let list = await ctMessage.GetAllContentByidBox(idBox, s.id);
  res.json({ err: true, list });
});
// chưa test
routeMess.post("/hiddenMess",async(req,res)=>{
  var sercurity: sercurity = req.cookies;
  var idMess=req.body.idMess;
  var hiddenMess=await ctHiddenMessList.GetHiddenMessByIdMessAndIdUser(sercurity.id,idMess);
  if (hiddenMess !== undefined) {
    await ctHiddenMessList.InsertHiddenMessToBox(sercurity.id,idMess)
    res.json({mess:"thành công"})
    return
  }
  res.status(400).json({mess:"thất bại"})
});
// chưa test
routeMess.post("/reMoveMess",async(req,res)=>{
  var sercurity:sercurity=req.cookies
  var idMess =req.body.idMess;
  await ctHiddenMessList.DeleteHiddenMessbyIdUser(sercurity.id,idMess);
  await ctMessage.DeleteMessbyIdUser(sercurity.id,idMess);

  res.json({mess:"xóa thành công"})
})
export default routeMess;
