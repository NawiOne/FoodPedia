import Axios from 'axios';
import {sharedVariable} from '../../sharedVariable';

export const getMenu = () => {
  return Axios.get(`${sharedVariable.url}getalldata?page=1&limit=1000`);
};

export const getMenuAll = () => {
  return Axios.get(`${sharedVariable.url}getalldata?page=1&limit=6`);
};
export const getMoreMenu = (page) => {
  return Axios.get(`${sharedVariable.url}getalldata?page=${page}&limit=6`);
};
export const getCategory = () => {
  return Axios.get(`${sharedVariable.url}category`);
};

export const searchMenu = (name) => {
  const url = `${sharedVariable.url}search`;
  return Axios.get(`${url}?name=${name}&by=name`);
};

export const getOrderHistory = (name) => {
  const url = `${sharedVariable.url}orderuser?name=${name}`;
  return Axios.get(url);
};
export const getAllOrderHistory = () => {
  const url = `${sharedVariable.url}orderuser/all`;
  return Axios.get(url);
};

export const insertOrder = (date, name, orders, amount) => {
  const data = {
    date: date,
    name: name,
    orders: orders,
    amount: amount,
  };
  const url = `${sharedVariable.url}orderuser`;
  return Axios.post(url, data);
};
export const deleteOrder = (id) => {
  const url = `${sharedVariable.url}orderuser?id=${id}`;
  return Axios.delete(url);
};

export const deleteMenu = (id) => {
  const url = `${sharedVariable.url}delete?id=${id}`;
  return Axios.delete(url);
};

export const login = (username, password) => {
  const url = `${sharedVariable.url}auth/login`;
  return Axios.post(url, {
    username: username,
    password: password,
  });
};

export const register = (username, password, email) => {
  const url = `${sharedVariable.url}auth/register`;
  return Axios.post(url, {
    username: username,
    password: password,
    id_level: 3,
    email: email,
  });
};

export const editMenu = (name, image, price, id_category, id_menu) => {
  let data = new FormData();
  if (name !== null) {
    data.append('name', name);
  } else if (image !== null) {
    data.append('image', {
      uri: `file://${image.path}`,
      type: image.type,
      name: image.fileName,
      size: image.fileSize,
    });
  } else if (price !== null) {
    data.append('price', price);
  } else if (id_category !== null) {
    data.append('id_category', id_category);
  }
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
  const url = `${sharedVariable.url}update`;
  return Axios.patch(url, data, config);
};

export const updateProfile = (username, email, image, id) => {
  let data = new FormData();
  if (username !== null) {
    data.append('username', username);
  } else if (email !== null) {
    data.append('email', email);
  } else if (image !== null) {
    data.append('image', {
      uri: `file://${image.path}`,
      type: image.type,
      name: image.fileName,
      size: image.fileSize,
    });
  }
  data.append('id', id);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      contentType: false,
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },
  };
  const url = `${sharedVariable.url}auth/update`;
  return Axios.patch(url, data, config);
};

export const getDataUser = (id) => {
  const url = `${sharedVariable.url}auth?id=${id}`;
  return Axios.get(url);
};
