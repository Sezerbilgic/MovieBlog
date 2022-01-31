import { combineReducers } from "redux";
import { moviesReducer } from "./reducers";

const reducers = combineReducers({
  data: moviesReducer,
});

export default reducers;
