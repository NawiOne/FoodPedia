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
export const insertOrder = (date, name, orders, amount) => {
  const data = {
    date: date,
    name: name,
    orders: orders,
    amount: amount,
  };
  const url = 'http://54.198.163.118:8000/orderuser';
  return Axios.post(url, data);
};
export const deleteOrder = (id) => {
  const url = `http://54.198.163.118:8000/orderuser?id=${id}`;
  return Axios.delete(url);
};

export const deleteMenu = (id) => {
  const url = `http://54.198.163.118:8000/delete?id=${id}`;
  return Axios.delete(url);
};

export const login = (username, password) => {
  const url = 'http://54.198.163.118:8000/auth/login';
  return Axios.post(url, {
    username: username,
    password: password,
  });
};

export const register = (username, password, email) => {
  const url = 'http://54.198.163.118:8000/auth/register';
  return Axios.post(url, {
    username: username,
    password: password,
    id_level: 3,
    email: email,
  });
};

export const editMenu = (name, image, price, id_category, id_menu) => {
  let data = new FormData();
  data.append('name', name);
  data.append('image', {
    uri: `file://${image.path}`,
    type: image.type,
    name: image.fileName,
    size: image.fileSize,
  });
  data.append('price', price);
  data.append('id_category', id_category);
  data.append('id_menu', id_menu);

  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      contentType: false,
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },
  };
  const url = 'http://54.198.163.118:8000/update';
  return Axios.patch(url, data, config);
};
