import React, { useEffect, useReducer } from "react";
import { useToast } from "context";

import {
  ACTION_TYPE_ERROR,
  ACTION_TYPE_LOADING,
  ACTION_TYPE_SUCCESS,
} from "utils";

export const useAsync = (api, fetchData, token) => {
  const { toastState, toastDispatch, showToast, setShowToast } = useToast();

  const [state, dispatch] = useReducer(
    function (state, action) {
      switch (action.type) {
        case ACTION_TYPE_LOADING:
          return { ...state, isLoading: true };

        case ACTION_TYPE_SUCCESS:
          return { ...state, isLoading: false, data: action.payload };

        case ACTION_TYPE_ERROR:
          return { ...state, isLoading: false, error: action.payload };

        default:
          return state;
      }
    },
    {
      data: [],
      error: "",
      isLoading: true,
    }
  );

  useEffect(() => {
    (async () => {
      dispatch({ type: ACTION_TYPE_LOADING });
      try {
        const response = await api();

        dispatch({
          type: ACTION_TYPE_SUCCESS,
          payload: response.data[fetchData],
        });
      } catch (error) {
        dispatch({
          type: ACTION_TYPE_ERROR,
          payload: error?.message,
        });
      }
    })();
  }, [token]);

  const postDataUsingApi = async (api, data) => {
    dispatch({ type: ACTION_TYPE_LOADING });

    try {
      const response = await api(data);

      dispatch({
        type: ACTION_TYPE_SUCCESS,
        payload: response.data[fetchData],
      });

      setShowToast(true);
      toastDispatch({
        type: ACTION_TYPE_SUCCESS,
        payload:
          fetchData === "wishlist"
            ? "Added in your wishlist 🎉"
            : "Added to cart 🛒",
      });
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch (error) {
      dispatch({
        type: ACTION_TYPE_ERROR,
        payload: error.response,
      });
      console.log("Er", error.message);

      toastDispatch({
        type: ACTION_TYPE_ERROR,
        payload: error?.message,
      });
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  const deleteDataUsingApi = async (api, id) => {
    dispatch({
      type: ACTION_TYPE_LOADING,
    });

    try {
      const response = await api(id);

      dispatch({
        type: ACTION_TYPE_SUCCESS,
        payload: response.data[fetchData],
      });

      setShowToast(true);
      toastDispatch({
        type: ACTION_TYPE_SUCCESS,
        payload: `${
          fetchData === "wishlist"
            ? "✅ Removed from wishlist "
            : "✅ Removed from Cart"
        }`,
      });
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch (error) {
      dispatch({
        type: ACTION_TYPE_ERROR,
        payload: error.message,
      });

      toastDispatch({
        type: ACTION_TYPE_ERROR,
        payload: error.message,
      });
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  const postCartQty = async (api, id, type) => {
    dispatch({ type: ACTION_TYPE_LOADING });
    try {
      const response = await api(id, type);

      dispatch({
        type: ACTION_TYPE_SUCCESS,
        payload: response.data[fetchData],
      });

      toastDispatch({
        type: ACTION_TYPE_SUCCESS,
        payload: `${
          type === "increment"
            ? "Added one more item in "
            : "Removed one of the item from "
        }  Your Cart 🎉`,
      });
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      dispatch({
        type: ACTION_TYPE_ERROR,
        payload: error.message,
      });
      toastDispatch({
        type: ACTION_TYPE_ERROR,
        payload: error.message,
      });
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  return { state, dispatch, postDataUsingApi, deleteDataUsingApi, postCartQty };
};
