import { useContext, createContext, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedin] = useState(false);

  const [getToken, setGetToken] = useState("");

  return (
    <UserContext.Provider
      value={{ isLoggedIn, setIsLoggedin, getToken, setGetToken }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
