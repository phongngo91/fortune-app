import axios from 'axios';

export const getFortunes = () => {
  return axios.get('api/fortunes');
};

export const getFortune = fortuneId => {
  return axios.get(`api/fortunes/${fortuneId}`);
};

export const getUserFortunes = (id) => {
  return axios.get(`api/fortunes/user/${id}`);
};

