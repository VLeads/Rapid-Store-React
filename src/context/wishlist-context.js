import { createContext, useContext, useState } from "react";
import { getAllWishlistItem } from "utils";
import { useAsync } from "custom-hooks/useAsync";

const WishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const fetchData = "wishlist";

  const authToken = localStorage.getItem("token");

  //   I can mention name too, but utilizing the JS property
  const { state: wishlist, ...methods } = useAsync(
    getAllWishlistItem,
    fetchData,
    authToken
  );

  const value = { wishlist, ...methods };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
