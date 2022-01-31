import { ActionTypes } from "../actions/action-types";

const initial_state = {
  movies: [],
};

export const moviesReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_POPULAR:
      return { ...state, movies: payload };
    default:
      return state;
  }
};
