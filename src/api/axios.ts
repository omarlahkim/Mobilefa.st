import axios from 'axios';

const token = 'token';

export const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar', Authorization: 'Bearer ' + token},
});
