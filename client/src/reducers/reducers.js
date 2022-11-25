import {OPEN_INFO_USER} from "../const/index";
const userReducers = (state = 0, action) =>{
    switch (action.type){
        case OPEN_INFO_USER:
            state=action.uid;
            return state;
        default:
            return state;
    }
}
export default userReducers