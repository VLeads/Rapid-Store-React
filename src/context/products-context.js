import { createContext, useContext } from "react";
import { useAsync } from "custom-hooks/useAsync";
import { getAllProducts } from "utils";

const ProductContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const fetchData = "products";

  const { state: products, dispatch: productsDispatch } = useAsync(
    getAllProducts,
    fetchData
  );

  const value = { products, productsDispatch };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductsProvider, useProducts };
