import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

// global axios config
const config = {
  baseURL: process.env.REACT_APP_API_DOMAIN,
  headers: {
    'Accepts': 'application/json',
    post: { 'Content-Type': 'application/json' },
    put: { 'Content-Type': 'application/json' },
    patch: { 'Content-Type': 'application/json' },
  },
} as AxiosRequestConfig;

// create a custon axios instance
const client: AxiosInstance = axios.create(config);

// ////////////////////////////
// configure interceptors
// ////////////////////////////
// request logger (for debugging purposes)
// client.interceptors.request.use((config: AxiosRequestConfig) => {
//   console.debug('Starting Request', config);
//   return config;
// });

export default client;
