import { createContext, useContext, useReducer, useState } from "react";
import {
  ACTION_TYPE_ERROR,
  ACTION_TYPE_SUCCESS,
  ACTION_TYPE_WARNING,
} from "utils";

const ToastContext = createContext({
  showToast: false,
  toastMsg: "",
  toastClass: "",
});

const ToastProvider = ({ children }) => {
  const [toastState, toastDispatch] = useReducer(
    function toastReducer(toastState, action) {
      switch (action.type) {
        case ACTION_TYPE_SUCCESS:
          return {
            toastClass: "success",
            toastMsg: action.payload,
          };
        case ACTION_TYPE_ERROR:
          return {
            toastClass: "error",
            toastMsg: action.payload,
          };
        case ACTION_TYPE_WARNING:
          return {
            toastClass: "warning",
            toastMsg: action.payload,
          };
        default:
          return toastState;
      }
    },
    { toastMsg: "", toastClass: "" }
  );

  const [showToast, setShowToast] = useState(false);

  return (
    <ToastContext.Provider
      value={{ toastState, toastDispatch, showToast, setShowToast }}
    >
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { ToastProvider, useToast };
