import { combineReducers } from "redux";
import { COMMUNITIES } from "./community/reducer";
import { USER_INFOR } from './user/reducer'

const rootReducer = combineReducers({
    USER_INFOR, COMMUNITIES
})

export { rootReducer }