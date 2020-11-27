import axios from 'axios';

const xhrAPI = (url: string, headers?: object) => {
  return axios.create({
    baseURL: url,
    headers: headers || {},
  });
};

export default xhrAPI;
