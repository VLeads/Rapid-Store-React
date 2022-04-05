import { createContext, useContext } from "react";
import { getAllCartItemsApi } from "utils";
import { useAsync } from "custom-hooks/useAsync";

const CartContext = createContext({ state: [], dispatch: () => {} });

const CartProvider = ({ children }) => {
  const fetchData = "cart";

  const authToken = localStorage.getItem("token");

  const { state: cart, ...methods } = useAsync(
    getAllCartItemsApi,
    fetchData,
    authToken
  );

  return (
    <CartContext.Provider value={{ cart, ...methods }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
