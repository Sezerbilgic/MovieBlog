import { ActionTypes } from "../actions/action-types";

const initial_state = {
  data: [],
};

export const moviesReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_POPULAR_MOVIES:
      return { ...state, data: payload };
    default:
      return state;
  }
};
export const seriesReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_POPULAR_SERIES:
      return { ...state, data: payload };
    default:
      return state;
  }
};

export const trendMoviesReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_MOST_TREND:
      return {...state, ...payload}
    default:
      return state;
  }
};

/* const ActionTypeState = {
  GET_POPULAR: "movies",
  GET_MOST_TREND: "movie",
};
 */
