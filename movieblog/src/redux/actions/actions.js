import axios from "axios";
import create from "../../apiConfig/create";
import Proxy from "../../apiConfig/Proxy";
import { ActionTypes } from "./action-types";

export const getMovies = (payload, type) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      return new Proxy()
        .get(payload)
        .then((response) => {
          dispatch({
            type: ActionTypes.GET_POPULAR,
            payload: { language: "tr-TR" },
          });
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
};
