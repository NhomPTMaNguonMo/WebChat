import mysql from "mysql"
import { confi } from "../../confi.js";
import validateuser from "../model/Validateuser.js";

export function InsertValidateuserBD(p:validateuser) {
    return new Promise((res,err)=>{
        var con =mysql.createConnection(confi)
        con.connect((e)=>{
            if (e) {
                err(e.message)
            }
            var sql="INSERT INTO `validateuser`(`id`, `cookie`, `socket`, `status`) VALUES (?,?,?,?)"
            con.query(sql,[p.id,p.cookie,p.socket,1],(e,result,fiel)=>{
                if (e) {
                    err(e.message)
                }
                res(result)
            })
        })
    })
}
export function UpdateValidateuserBD(id:string,socket:string,status:number) {
    return new Promise((res,err)=>{
        var con=mysql.createConnection(confi);
        con.connect((e)=>{
            if (e) {
                err(e)
            }
            var sql="UPDATE `validateuser` SET `socket`=?,`status`=? WHERE id=?"
            con.query(sql,[socket,status,id],(e,rt,fiels)=>{
                if (e) {
                    err(e)
                }
                res(true)
            })
        })
    })
}
export function GetValidateUserBD(cookie:string,) {
    
}