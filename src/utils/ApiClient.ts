import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import bookMapper from './BookMapper';

// global axios config
const config = {
  baseURL: 'https://gutendex.com/',
  headers: {
    // 'Accepts': 'application/json',
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
client.interceptors.response.use((response) => {

  if (response.config.url) {
    if (/^\/books\/[\d]+[\/]?$/.test(response.config.url)) {
      response.data = bookMapper(response.data);
    } else if (/^\/books[\/]?/.test(response.config.url)) {
      response.data.results = response.data.results.map(bookMapper);
    }
  }

  return response;
});

export default client;
