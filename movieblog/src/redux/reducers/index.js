import { combineReducers } from "redux";
import { moviesReducer, seriesReducer, trendMoviesReducer } from "./reducers";

const reducers = combineReducers({
  movies: moviesReducer,
  movie: trendMoviesReducer,
  series: seriesReducer 
});

export default reducers;
