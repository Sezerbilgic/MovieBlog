import Proxy from "../../apiConfig/Proxy";
import { ActionTypes } from "./action-types";

export const getMovies = (payload, type) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      return new Proxy()
        .get(payload)
        .then((response) => {
          dispatch({
            type: ActionTypes[type],
            payload: response.results,
          });
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
};

export const getTrendMovie = (payload,type) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      return new Proxy()
        .get(payload)
        .then((response) => {
          dispatch({
            type: ActionTypes[type],
            payload: response,
          });
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
}
