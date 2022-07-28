import { combineReducers } from "redux";
import albums from "./albums";

const rootReducers = combineReducers({
  albums,
});
export default rootReducers;
