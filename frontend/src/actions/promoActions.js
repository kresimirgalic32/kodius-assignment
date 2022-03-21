import Axios from "axios";
import {
  PROMO_REQUEST,
  PROMO_SUCCESS,
  PROMO_FAIL,
} from "../constants/promoConstants";

export const promo = (name) => async (dispatch) => {
  dispatch({ type: PROMO_REQUEST, payload: { name } });
  try {
    const { data } = await Axios.post("api/promo/promo", { name });
    dispatch({ type: PROMO_SUCCESS, payload: data });
    localStorage.setItem("promo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: PROMO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const promoSetup = (name, conjuction) => async (dispatch) => {
//   dispatch({});
// };
