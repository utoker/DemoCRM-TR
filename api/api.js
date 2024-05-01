// api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.4.37:45455/data/',
  timeout: 20000, // or whatever timeout you desire
  // headers: {'X-Custom-Header': 'foobar'}
});

export default api;
