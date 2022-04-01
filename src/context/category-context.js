import { createContext, useContext } from "react";
import { useAsync } from "custom-hooks/useAsync";
import { getAllCategories, getAllProducts } from "utils";

const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const fetchData = "categories";

  const { state: categories, dispatch: categoriesDispatch } = useAsync(
    getAllCategories,
    fetchData
  );

  return (
    <CategoryContext.Provider value={{ categories, categoriesDispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
