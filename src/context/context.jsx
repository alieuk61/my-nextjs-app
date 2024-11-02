// context/MyContext.js
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {

  const [boardsdata, setBoardsData] = useState();

  return (
    <MyContext.Provider value={{ 
        
     }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
