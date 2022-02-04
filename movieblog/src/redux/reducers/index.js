import { combineReducers } from "redux";
import { moviesReducer, trendMoviesReducer } from "./reducers";

const reducers = combineReducers({
  data: moviesReducer,
  movie: trendMoviesReducer 
});

export default reducers;
