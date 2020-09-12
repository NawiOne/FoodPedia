import Axios from 'axios';

export const getMenu = () => {
  return Axios.get('http://54.198.163.118:8000/getalldata?page=1&limit=6');
};

export const getCategory = () => {
  return Axios.get('http://54.198.163.118:8000/category');
};
