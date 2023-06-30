import axios from "axios";

export const API = async (url, method, data) => {
  let instance = axios.create();
  let options = {
    url: url,
    method: method,
    body: method === "POST" ? JSON.stringify(data) : "",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  //   instance.interceptors.request.use(
  //     (req) => {
  //       console.log(req);
  //     },
  //     (err) => {
  //       return Promise.reject(err);
  //     }
  //   );

  //   instance.interceptors.response.use(
  //     (res) => {
  //       console.log(res);
  //       return res;
  //     },
  //     (err) => {
  //       return Promise.reject(err);
  //     }
  //   );

  const response = await instance(options);
  return response;
};
