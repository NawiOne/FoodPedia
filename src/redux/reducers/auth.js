import {
  loginAction,
  pending,
  rejected,
  fulfilled,
  logoutAction,
  registerAction,
} from '../actions/actionType';

const initialState = {
  data: null,
  isAdmin: false,
  isLogin: false,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const auth = (state = initialState, {type, payload}) => {
  switch (type) {
    case loginAction + pending:
      return {
        ...state,
        isPending: true,
      };
    case loginAction + rejected:
      return {
        ...state,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case loginAction + fulfilled:
      let admin = null;
      let login = null;
      if (payload.data.isSuccess) {
        if (payload.data.data.id_level === 1) {
          admin = true;
          login = true;
        } else {
          admin = false;
          login = true;
        }
      } else {
        admin = false;
        login = false;
      }
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        data: payload.data.data,
        isRejected: false,
        isAdmin: admin,
        isLogin: login,
      };
    case logoutAction:
      return {
        ...state,
        data: null,
        isAdmin: false,
        isLogin: false,
        isPending: false,
        isFulfilled: false,
        isRejected: false,
      };
    case registerAction + pending:
      return {
        ...state,
        isPending: true,
      };
    case registerAction + rejected:
      return {
        ...state,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case registerAction + fulfilled:
      if (payload.data.isSuccess) {
        if (payload.data.data.id_level === 1) {
          admin = true;
          login = true;
        } else {
          admin = false;
          login = true;
        }
      } else {
        admin = false;
        login = false;
      }
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        data: payload.data.data,
        isRejected: false,
        isAdmin: admin,
        isLogin: login,
      };
    default:
      return state;
  }
};

export default auth;
