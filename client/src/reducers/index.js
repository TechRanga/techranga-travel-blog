import { combineReducers } from "redux";
import postReducer from "./posts.reducer";
import authReducer from "./auth.reducer";

export default combineReducers({postReducer, authReducer});