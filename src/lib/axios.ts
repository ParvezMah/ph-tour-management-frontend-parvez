import config from '@/config';
import axios from 'axios';


export const axiosInstance = axios.create({
  baseURL: config.baseUrl,
  withCredentials: true, // amar ekta httpOnlyCookie asbe seta tumi capture korba cookie er modde rekhe diba
});



// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("Axios ", config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function onFulfilled(response) {
    console.log("Axios ", response)
    return response;
  },
  function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);


