import {OPEN_CHAT_BOX, OPEN_INFO_USER,SEND_CHAT} from "../const/index";
const userReducers = (state = 0, action) =>{
    switch (action.type){
        case OPEN_INFO_USER:
            state=action.uid;
            return state;
        default:
            return state;
    }
}
const chatReducers = (state = {}, action) =>{
    switch (action.type){
        case OPEN_CHAT_BOX:
            state={user:action.user,idBox:action.idBox}
            return state;
        default:
            return state;
    }
}
const sendReducers =(state = {},action)=>{
        switch (action.type){
        case SEND_CHAT:
            state={idBox:action.idBox,content:action.content}
            return state;
        default:
            return state;
    }
}
export {userReducers,chatReducers,sendReducers}