import {login, register, updateProfile, getDataUser} from '../../utils/http';
import {
  loginAction,
  registerAction,
  logoutAction,
  updateProfileAction,
  getDataUserAction,
} from './actionType';

export const loginCreator = (username, password) => {
  return {
    type: loginAction,
    payload: login(username, password),
  };
};

export const registerCreator = (username, password, email) => {
  return {
    type: registerAction,
    payload: register(username, password, email),
  };
};

export const logoutCreator = () => {
  return {
    type: logoutAction,
  };
};

export const updateProfileCreator = (username, email, image, id) => {
  return {
    type: updateProfileAction,
    payload: updateProfile(username, email, image, id),
  };
};

export const getDataUserCreator = (id) => {
  return {
    type: getDataUserAction,
    payload: getDataUser(id),
  };
};
