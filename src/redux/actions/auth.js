import {login, register} from '../../utils/http';
import {loginAction, registerAction, logoutAction} from './actionType';

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
