import {OPEN_INFO_USER,OPEN_CHAT_BOX,SEND_CHAT} from "../const/index";
export const openInfoUser = (uid)=>{
    return {
        type: OPEN_INFO_USER,
        uid
    }
}
export const openChatBox = (user,idBox)=>{
    return {
        type: OPEN_CHAT_BOX,
        user,
        idBox
    }
}
export const sendChatBox = (idBox,content)=>{
        return {
        type: SEND_CHAT,
        idBox,
        content
    }
}