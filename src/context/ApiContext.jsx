import React from "react";

export const APIContext = React.createContext();

export const APIProvider = ({ children }) => {
  const [userData, setUserData] = React.useState({});
  React.useMemo(() => {
    localStorage.setItem("user", JSON.stringify(userData));
  }, [userData]);

  const getUserData = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  return (
    <APIContext.Provider value={{ setUserData, getUserData }}>
      {children}
    </APIContext.Provider>
  );
};

export const useAPIContext = () => {
  return React.useContext(APIContext);
};

