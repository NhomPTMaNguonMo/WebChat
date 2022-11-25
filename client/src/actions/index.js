import {OPEN_INFO_USER} from "../const/index";
export const openInfoUser = (uid)=>{
    return {
        type: OPEN_INFO_USER,
        uid
    }
}