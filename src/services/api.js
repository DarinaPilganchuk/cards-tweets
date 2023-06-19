import axios from 'axios';

axios.defaults.baseURL = 'https://648dfd0c2de8d0ea11e876b0.mockapi.io';

export async function getUsers(params) {
  return await axios.get(`/users`, { params });
}