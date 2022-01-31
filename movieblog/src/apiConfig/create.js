import axios from "axios";
import queryString from "query-string";
import config from "./config";

export default axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  params: (params) =>
    queryString.stringify({ ...params, apiKey: config.apiKey }),
});
