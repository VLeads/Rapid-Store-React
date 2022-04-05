import { useContext, createContext, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedin] = useState(token ? true : false);

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
