import { combineReducers } from "redux";
import userReducers from "./reducers";
const reducers = combineReducers({
    userId:userReducers
})
export default reducers;