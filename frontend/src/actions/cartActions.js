import {
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  // CART_SAVE_ITEMS,
} from "../constants/cartConstants";
// export const saveCartItems = (data) => (dispatch) => {
//   dispatch({ type: CART_SAVE_ITEMS, payload: data });
//   localStorage.setItem("cartItems", JSON.stringify(data));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
};
