import axios from "axios";
import config from "./config";
import queryString from 'query-string';

class Proxy {
  constructor(parameters = {} , params = {}){
    this.parameters = parameters;
    this.params = params;
  }

  submit(requestType, url, data = null, params = null) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  get(payload) {
    let endpoint = `${config.baseUrl}${payload.key}?api_key=${config.apiKey}`;
    let params = queryString.stringify({
      ...payload.params
    });
    endpoint = payload.params ? (endpoint += `&${params}`) : endpoint; 
    return this.submit("get", `${endpoint}`);
  }
}

export default Proxy;
