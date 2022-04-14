import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  newProductReducer,
  productListReducer,
} from "./reducers/productReducers";
import { userRegisterReducer, userSigninReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducers";
import { newPromoReducer, promoReducer } from "./reducers/promoReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderMineListReducer,
} from "./reducers/orderReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    // cartItems: localStorage.getItem("cartItems")
    //   ? JSON.parse(localStorage.getItem("cartItems"))
    //   : {},
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
    paymentMethod: "Credit Card",
  },
  promo: {
    promo: localStorage.getItem("promo")
      ? JSON.parse(localStorage.getItem("promo"))
      : {},
  },
};
const reducer = combineReducers({
  productList: productListReducer,
  newProduct: newProductReducer,
  // productDetails: productDetailsReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  cart: cartReducer,
  promo: promoReducer,
  newPromo: newPromoReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderMineList: orderMineListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
