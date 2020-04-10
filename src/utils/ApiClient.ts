import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import bookMapper from './BookMapper';

let baseURL = 'https://api.gutenbooks.com/';
if (process.env.REACT_APP_API_DOMAIN) {
  baseURL = process.env.REACT_APP_API_DOMAIN;
}

// global axios config
const config = {
  baseURL,
  headers: {
    // 'Accepts': 'application/json',
    post: { 'Content-Type': 'application/json' },
    put: { 'Content-Type': 'application/json' },
    patch: { 'Content-Type': 'application/json' },
  },
} as AxiosRequestConfig;

// create a custon axios instance
const client: AxiosInstance = axios.create(config);

const bookShowRegex = /^\/books\/[\d]+[/]?$/;
const bookIndexRegex = /^\/books[/]?/;

// ////////////////////////////
// configure interceptors
// ////////////////////////////
// request logger (for debugging purposes)
client.interceptors.response.use((response) => {
  if (response.config.url) {
    if (bookShowRegex.test(response.config.url)) {
      response.data = bookMapper(response.data);
    } else if (bookIndexRegex.test(response.config.url)) {
      response.data.results = response.data.results.map(bookMapper);
    }
  }

  return response;
});

export default client;
