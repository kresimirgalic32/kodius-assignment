import {
  NEW_PRODUCT_FAIL,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newProductReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_PRODUCT_REQUEST:
      return { loading: true };
    case NEW_PRODUCT_SUCCESS:
      return { loading: false };
    case NEW_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
