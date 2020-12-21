import { basketReducer, userReducer } from "./reducer";
import { combineReducers } from "redux";

// The key of this object will be the name of the store
const rootReducers = combineReducers({
  basket: basketReducer,
  user: userReducer,
});

export default rootReducers;
