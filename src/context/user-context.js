import { useContext, useEffect, createContext, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [getToken, setGetToken] = useState("");

  useEffect(() => {
    setGetToken(localStorage.getItem("token"));
  }, []);

  const [isLoggedIn, setIsLoggedin] = useState(getToken ? true : false);

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
