import { useContext, createContext, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedin] = useState(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedin }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
