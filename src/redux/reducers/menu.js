import {
  getMenuAction,
  getCatAction,
  byCategoryAction,
  pending,
  rejected,
  fulfilled,
  addCartAction,
} from '../actions/actionType';

const initalstate = {
  category: [],
  data: [],
  nameCategory: {},
  cart: [],
  insertStatus: [],
  history: [],
  error: '',
  isPending: false,
  isfulfilled: false,
  isRejected: false,
};

const menu = (prevstate = initalstate, {type, payload}) => {
  switch (type) {
    case getMenuAction + pending:
      return {
        ...prevstate,
        isPending: true,
      };
    case getMenuAction + rejected:
      return {
        ...prevstate,
        error: payload,
        isRejected: true,
        isPending: false,
      };
    case getMenuAction + fulfilled:
      return {
        ...prevstate,
        isfulfilled: true,
        data: payload.data.data,
        isPending: false,
      };
    case getCatAction + pending:
      return {
        ...prevstate,
        isPending: true,
      };
    case getCatAction + rejected:
      return {
        ...prevstate,
        error: payload,
        isRejected: true,
        isPending: false,
      };
    case getCatAction + fulfilled:
      return {
        ...prevstate,
        isfulfilled: true,
        category: payload.data.data,
        isPending: false,
      };
    case byCategoryAction:
      if (payload.name_category == prevstate.nameCategory.name_category) {
        return {
          ...prevstate,
          nameCategory: {...payload},
        };
      } else {
        return {
          ...prevstate,
          nameCategory: {...payload},
        };
      }

    // add cart
    case addCartAction:
      const index = prevstate.cart.findIndex((el) => {
        return payload.id_menu === el.id_menu;
      });
      if (index >= 0) {
        prevstate.cart.splice(index, 1);
        return {
          ...prevstate,
          cart: prevstate.cart,
        };
      } else {
        return {
          ...prevstate,
          cart: prevstate.cart.concat(payload),
        };
      }

    default:
      return prevstate;
  }
};

export default menu;
