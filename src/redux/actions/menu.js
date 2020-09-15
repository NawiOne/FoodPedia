import {
  getMenu,
  getCategory,
  searchMenu,
  getOrderHistory,
  insertOrder,
  deleteOrder,
} from '../../utils/http';
import {
  getMenuAction,
  getCatAction,
  searchMenuAction,
  getOrderUserAction,
  insertOrderAction,
  byCategoryAction,
  addCartAction,
  plusQuantityAction,
  minQuantityAction,
  cancelCartAction,
  deleteOrderAction,
  clearAction,
} from '../actions/actionType';

export const getMenuCreator = () => {
  return {
    type: getMenuAction,
    payload: getMenu(),
  };
};
export const getCategoryCreator = () => {
  return {
    type: getCatAction,
    payload: getCategory(),
  };
};
export const searchMenuCreator = (name) => {
  return {
    type: searchMenuAction,
    payload: searchMenu(name),
  };
};

export const listByCategoryCreator = (category) => {
  return {
    type: byCategoryAction,
    payload: {
      name_category: category,
    },
  };
};

export const addCartCreator = (id, name, price, img) => {
  return {
    type: addCartAction,
    payload: {
      id_menu: id,
      name: name,
      quantity: 1,
      price: price,
      picture: img,
    },
  };
};

export const plusQuantityCreator = (id) => {
  return {
    type: plusQuantityAction,
    payload: {
      id_menu: id,
    },
  };
};

export const minQuantityCreator = (id) => {
  return {
    type: minQuantityAction,
    payload: {
      id_menu: id,
    },
  };
};

export const cancelCartCreator = () => {
  return {
    type: cancelCartAction,
    payload: null,
  };
};

export const getOrderUserCreator = () => {
  return {
    type: getOrderUserAction,
    payload: getOrderHistory(),
  };
};

export const insertOrderCreator = (date, name, orders, amount) => {
  return {
    type: insertOrderAction,
    payload: insertOrder(date, name, orders, amount),
  };
};

export const deleteOrderCreator = (id) => {
  return {
    type: deleteOrderAction,
    payload: deleteOrder(id),
  };
};

export const clearCreator = () => {
  return {
    type: clearAction,
    payload: null,
  };
};
