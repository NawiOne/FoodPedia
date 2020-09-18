import {
  getMenuAction,
  getCatAction,
  searchMenuAction,
  byCategoryAction,
  getOrderUserAction,
  insertOrderAction,
  deleteOrderAction,
  pending,
  rejected,
  fulfilled,
  addCartAction,
  plusQuantityAction,
  minQuantityAction,
  cancelCartAction,
  clearAction,
  deleteMenuAction,
  editMenuAction,
  editDataMenuAction,
  changePending,
} from '../actions/actionType';

const initalstate = {
  userOrder: [],
  editData: {},
  category: [],
  orderStatus: [],
  data: [],
  dataSearch: [],
  nameCategory: {},
  cart: [],
  insertStatus: [],
  history: [],
  error: '',
  auth: {
    isLogin: true,
    level: 1,
  },
  pendingEdit: null,
  isPending: false,
  isfulfilled: false,
  isRejected: false,
};

const menu = (prevstate = initalstate, {type, payload}) => {
  switch (type) {
    // get menu
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
    // get category
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
    // show menu by category
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
    // search menu by name
    case searchMenuAction + pending:
      return {
        ...prevstate,
        isPending: true,
      };
    case searchMenuAction + rejected:
      return {
        ...prevstate,
        error: payload,
        isRejected: true,
        isPending: false,
      };
    case searchMenuAction + fulfilled:
      return {
        ...prevstate,
        isfulfilled: true,
        dataSearch: payload.data.data,
        isPending: false,
      };
    case clearAction:
      return {
        ...prevstate,
        dataSearch: [],
      };
    //  delete menu
    case deleteMenuAction + fulfilled:
      return {
        ...prevstate,
      };

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

    case plusQuantityAction:
      const plusQuantity = prevstate.cart.findIndex((el) => {
        return payload.id_menu === el.id_menu;
      });
      let newCartPlus = [...prevstate.cart];
      newCartPlus[plusQuantity] = {
        ...newCartPlus[plusQuantity],
        quantity: prevstate.cart[plusQuantity].quantity + 1,
      };
      return {
        ...prevstate,
        cart: newCartPlus,
      };
    case cancelCartAction:
      return {
        ...prevstate,
        cart: [],
      };

    case minQuantityAction:
      const minQuantity = prevstate.cart.findIndex((el) => {
        return payload.id_menu === el.id_menu;
      });
      let newCartMin = [...prevstate.cart];
      newCartMin[minQuantity] = {
        ...newCartMin[minQuantity],
        quantity: prevstate.cart[minQuantity].quantity - 1,
      };
      if (newCartMin[minQuantity].quantity === 0) {
        prevstate.cart.splice(minQuantity, 1);
        return {
          ...prevstate,
          cart: prevstate.cart,
        };
      } else {
        return {
          ...prevstate,
          cart: newCartMin,
        };
      }
    // history of user order
    case getOrderUserAction + pending:
      return {
        ...prevstate,
        isPending: true,
      };
    case getOrderUserAction + rejected:
      return {
        ...prevstate,
        error: payload,
        isRejected: true,
        isPending: false,
      };
    case getOrderUserAction + fulfilled:
      return {
        ...prevstate,
        isfulfilled: true,
        userOrder: payload.data.data,
        isPending: false,
      };

    case insertOrderAction + pending:
      return {
        ...prevstate,
        isPending: true,
      };
    case insertOrderAction + rejected:
      return {
        ...prevstate,
        isRejected: true,
        error: payload,
        isPending: false,
      };
    case insertOrderAction + fulfilled:
      return {
        ...prevstate,
        orderStatus: payload,
        isfulfilled: true,
        isPending: false,
      };
    // delete order
    case deleteOrderAction + fulfilled:
      return {
        ...prevstate,
      };
    // edit data
    case editMenuAction:
      if (payload.id_menu == prevstate.id_menu) {
        return {
          ...prevstate,
          editData: {...payload},
        };
      } else {
        return {
          ...prevstate,
          editData: {...payload},
        };
      }
    case editDataMenuAction + pending:
      return {
        ...prevstate,
        pendingEdit: true,
        isfulfilled: false,
      };
    case editDataMenuAction + rejected:
      return {
        ...prevstate,
        error: payload,
        isRejected: true,
        pendingEdit: false,
        isfulfilled: false,
      };
    case editDataMenuAction + fulfilled:
      return {
        ...prevstate,
        isfulfilled: true,
        pendingEdit: false,
      };
    case changePending:
      return {
        ...prevstate,
        pendingEdit: null,
      };
    default:
      return prevstate;
  }
};

export default menu;
