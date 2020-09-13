import Axios from 'axios';
import search from '../style/search';

export const getMenu = () => {
  return Axios.get('http://54.198.163.118:8000/getalldata?page=1&limit=100');
};

export const getCategory = () => {
  return Axios.get('http://54.198.163.118:8000/category');
};

export const searchMenu = (name) => {
  const url = 'http://54.198.163.118:8000/search';
  return Axios.get(`${url}?name=${name}&by=name`);
};

export const getOrderHistory = () => {
  const url = 'http://54.198.163.118:8000/orderuser';
  return Axios.get(url);
};
