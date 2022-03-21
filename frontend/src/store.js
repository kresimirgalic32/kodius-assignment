import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import productListReducer from "./reducers/productReducers";
import { userRegisterReducer, userSigninReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducers";
import { promoReducer } from "./reducers/promoReducers";

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
  // productDetails: productDetailsReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  cart: cartReducer,
  promo: promoReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
