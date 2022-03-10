import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import productListReducer from "./reducers/productReducers";
import { userSigninReducer } from "./reducers/userReducer";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  // cart: {
  //   cartItems: localStorage.getItem("userInfo")
  //     ? JSON.parse(localStorage.getItem("cartItems"))
  //     : [],
  // },
};
const reducer = combineReducers({
  productList: productListReducer,
  // productDetails: productDetailsReducer
  userSignin: userSigninReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
