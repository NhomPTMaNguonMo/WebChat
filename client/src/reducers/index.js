import { combineReducers } from "redux";
import {chatReducers, userReducers,sendReducers} from "./reducers";
const reducers = combineReducers({
    userId:userReducers,
    chat:chatReducers,
    send:sendReducers
})
export default reducers;