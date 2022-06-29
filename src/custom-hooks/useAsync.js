import React, { useEffect, useReducer } from "react";

import {
  ACTION_TYPE_ERROR,
  ACTION_TYPE_LOADING,
  ACTION_TYPE_SUCCESS,
} from "utils";
import { toast } from "react-toastify";

export const useAsync = (api, fetchData, token) => {
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

      toast.success(
        fetchData === "wishlist"
          ? "Added in your wishlist 🎉"
          : "Added to cart 🛒"
      );
    } catch (error) {
      toast.error(
        fetchData === "wishlist"
          ? "Added in your wishlist 🎉"
          : "Added to cart 🛒"
      );
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

      toast.success(fetchData === "wishlist" && " Removed from wishlist ");
    } catch (error) {
      dispatch({
        type: ACTION_TYPE_ERROR,
        payload: error.message,
      });

      toast.error(error.message);
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

      toast.success(
        type === "increment"
          ? "Added one more item in cart "
          : "Removed one item from cart "
      );
    } catch (error) {
      dispatch({
        type: ACTION_TYPE_ERROR,
        payload: error.message,
      });

      toast.error(error?.message);
    }
  };

  return { state, dispatch, postDataUsingApi, deleteDataUsingApi, postCartQty };
};
