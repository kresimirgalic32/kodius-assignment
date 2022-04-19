import {
  PROMO_REQUEST,
  PROMO_SUCCESS,
  PROMO_FAIL,
  NEW_PROMO_REQUEST,
  NEW_PROMO_SUCCESS,
  NEW_PROMO_FAIL,
  PROMO_LIST_REQUEST,
  PROMO_LIST_SUCCESS,
  PROMO_LIST_FAIL,
  PROMO_DELETE_REQUEST,
  PROMO_DELETE_SUCCESS,
  PROMO_DELETE_FAIL,
} from "../constants/promoConstants";
export const promoReducer = (state = { promo: [] }, action) => {
  switch (action.type) {
    case PROMO_REQUEST:
      return { loading: true };
    case PROMO_SUCCESS:
      return { loading: false, promo: action.payload };
    case PROMO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newPromoReducer = (state = { promo: [] }, action) => {
  switch (action.type) {
    case NEW_PROMO_REQUEST:
      return { loading: true };
    case NEW_PROMO_SUCCESS:
      return { loading: false, promo: action.payload };
    case NEW_PROMO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const listPromoReducer = (state = { promo: [] }, action) => {
  switch (action.type) {
    case PROMO_LIST_REQUEST:
      return { loading: true };
    case PROMO_LIST_SUCCESS:
      return { loading: false, promo: action.payload };
    case PROMO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const promoDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PROMO_DELETE_REQUEST:
      return { loading: true };
    case PROMO_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PROMO_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
