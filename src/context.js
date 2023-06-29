import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  let userid;

  const updateUserId = (val) => {
    userid = val;
  };

  return (
    <>
      <AppContext.Provider value={{ userid, updateUserId }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
