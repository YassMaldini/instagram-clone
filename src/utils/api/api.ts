import { create } from 'apisauce';

const api = create({
  baseURL: 'https://i.instagram.com/api/v1',
});

export const authenticationApi = create({
  // baseURL: 'http://192.168.1.17:5000',
  // baseURL: 'http://192.168.1.108:3000',
  baseURL: 'https://insta-auth-5051485b788c.herokuapp.com',
});

export default api;
