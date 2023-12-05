import axios from "axios";
import config from "../config.js";
export default ({ url = "/", method = "get", data = {}, headers = {} }) => {
  if (headers.autorization) {
    headers.authorization = config.token;
  }
  return axios({ url, method, data, headers }).catch((error) => {
    config.errorHandler(error, { url, method, data, headers });
    throw error;
  });
};
