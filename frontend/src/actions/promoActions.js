import Axios from "axios";
import { useState } from "react";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";
import {
  PROMO_REQUEST,
  PROMO_SUCCESS,
  PROMO_FAIL,
  NEW_PROMO_REQUEST,
  NEW_PROMO_SUCCESS,
  NEW_PROMO_FAIL,
  PROMO_LIST_SUCCESS,
  PROMO_LIST_FAIL,
  PROMO_LIST_REQUEST,
  PROMO_DELETE_REQUEST,
  PROMO_DELETE_SUCCESS,
  PROMO_DELETE_FAIL,
} from "../constants/promoConstants";

export const promo = (name) => async (dispatch) => {
  dispatch({ type: PROMO_REQUEST, payload: { name } });
  try {
    const { data } = await Axios.post("/kodius-assignment/api/promo/promo", { name });
    dispatch({ type: PROMO_SUCCESS, payload: data });
    let test = localStorage.getItem("promo");

    if (test === null) {
      var list = [];
      list.push(data);
      list = JSON.stringify(list);

      localStorage.setItem("promo", list);
      window.location.reload();
    } else {
      test = JSON.parse(test);

      test.push(data);
      test = JSON.stringify(test);
      let pom = data;
      pom = JSON.stringify(pom);

      var pom2 = JSON.stringify(localStorage.getItem("promo"));

      if (!(pom2.indexOf("false") !== -1)) {
        localStorage.setItem("promo", test);
        window.location.reload();
      } else if (test.indexOf("false") !== -1) {
        if (!(pom.indexOf("false") !== -1)) {
          localStorage.setItem("promo", test);
          window.location.reload();
        }
      }
    }
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

export const promoRemove = (name) => async (dispatch) => {
  dispatch({ type: PROMO_REQUEST, payload: { name } });
  try {
    const { data } = await Axios.post("/kodius-assignment/api/promo/promo", { name });
    dispatch({ type: PROMO_SUCCESS, payload: data });
    var remove = JSON.parse(localStorage.getItem("promo"));
    for (var i = 0; i < remove.length; ) {
      if (remove[i].name.includes(name)) {
        remove.splice(i, 1);
        remove = JSON.stringify(remove);
        localStorage.setItem("promo", remove);

        window.location.reload();
      }
      i = i + 1;
    }
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

export const newPromo = (name, conjuction, formula) => async (dispatch) => {
  dispatch({ type: NEW_PROMO_REQUEST, payload: { name, conjuction, formula } });
  try {
    const { data } = await Axios.post("/kodius-assignment/api/promo/promosetup", {
      name,
      conjuction,
      formula,
    });
    dispatch({ type: NEW_PROMO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEW_PROMO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listPromo = () => async (dispatch) => {
  dispatch({
    type: PROMO_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/kodius-assignment/api/promo/list");

    dispatch({ type: PROMO_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PROMO_LIST_FAIL, payload: message });
  }
};

export const deletePromo = (promoId) => async (dispatch) => {
  dispatch({ type: PROMO_DELETE_REQUEST, payload: promoId });
  try {
    const { data } = Axios.delete(`/kodius-assignment/api/promo/${promoId}`);
    dispatch({ type: PROMO_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PROMO_DELETE_FAIL, payload: message });
  }
};
