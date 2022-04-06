import { createContext, useContext } from "react";
import { getAllCartItemsApi } from "utils";
import { useAsync } from "custom-hooks/useAsync";
import { useUser } from "./user-context";

const CartContext = createContext({ state: [], dispatch: () => {} });

const CartProvider = ({ children }) => {
  const fetchData = "cart";

  const { getToken: authToken } = useUser();

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
