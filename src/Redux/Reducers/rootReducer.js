import { combineReducers } from "redux";
import firstReducer from "./reducer";
const rootReducer = combineReducers({
  allusers: firstReducer,
});
export default rootReducer;
