import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
	posts: postsReducer,
	auth: authReducer
})

export default rootReducer;