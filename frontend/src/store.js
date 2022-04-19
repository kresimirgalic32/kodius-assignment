import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  newProductReducer,
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";
import {
  userGetReducer,
  userRegisterReducer,
  userSigninReducer,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducers";
import {
  listPromoReducer,
  newPromoReducer,
  promoDeleteReducer,
  promoReducer,
} from "./reducers/promoReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderMineListReducer,
} from "./reducers/orderReducers";
import { listPromo } from "./actions/promoActions";

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
  productNewProduct: newProductReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userGett: userGetReducer,
  cart: cartReducer,
  promo: promoReducer,
  newPromo: newPromoReducer,
  listPromo: listPromoReducer,
  promoDelete: promoDeleteReducer,
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
