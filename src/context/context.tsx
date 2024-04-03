import { createContext, useState } from 'react';

const GlobalContext = createContext({});

const GlobalProvider = ({ children }: any) => {
  const [nightMode, setNightMode] = useState<boolean>(false); 

  return (
    <GlobalContext.Provider value={{ nightMode, setNightMode }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
