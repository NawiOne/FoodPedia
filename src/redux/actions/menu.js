import {getMenu, getCategory} from '../../utils/http';
import {
  getMenuAction,
  getCatAction,
  byCategoryAction,
  addCartAction,
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
